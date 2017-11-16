import React,{Component} from 'react';

class ProductRow extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
            <ul className="ProductRow">
                <span>{this.props.row_data.name}</span>
                <span>{this.props.row_data.price}</span>
            </ul>
            </div>
        );
    }
}


class ProductCategoryRow extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="ProductCategoryRow"><b>{this.props.title}</b></div>
        );
    }
}

class ProductTable extends Component{
    constructor(props){
        super(props);

    }
    render(){
        let data_list = this.props.data_list;
        let sport_goods_data = data_list.filter((item)=>{
            return item.category === "Sporting Goods"
        });
        let elect_goods_data = data_list.filter((item)=>{
            return item.category === "Electronics"
        });

        let sportItems =  sport_goods_data.map((item)=>{
                return <ProductRow row_data={item}></ProductRow>
            })
        let sportGoods = (
            <div>
                <ProductCategoryRow title="Sporting Goods"></ProductCategoryRow>
                {sportItems}
            </div>
        );
        let electItems =  elect_goods_data.map((item)=>{
                return <ProductRow row_data={item}></ProductRow>
            })
        let electGoods = (
            <div>
                <ProductCategoryRow title="Electronics"></ProductCategoryRow>
                {electItems}
            </div>
        );

        return (
            <div className="ProductTable">
                <div className="ProductTable-Header">
                    <span>Name</span> |
                    <span>Price</span>
                </div>
                {sportGoods}
                {electGoods}
            </div>
        );
    }
}

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.filterTextChange = this.filterTextChange.bind(this);
        this.inStockOnlyChange = this.inStockOnlyChange.bind(this);
    }
    filterTextChange(e){
        let filterText = e.target.value;
        this.props.filterTextChange(filterText)
    }
    inStockOnlyChange(e){
        let inStockOnly = e.target.checked;
        this.props.inStockOnlyChange(inStockOnly);
    }
    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-Input">
                    <div>
                        <input value={this.props.filterText} onChange={this.filterTextChange}/>
                    </div>
                    <div>
                        <label htmlFor="inStockOnly">
                            <input type="checkbox" name="inStockOnly" value={this.props.inStockOnly} onChange={this.inStockOnlyChange}/>
                        Only show products in stock</label>
                    </div>
                </div>
            </div>
        );
    }
}

class FilterableProductTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            "filterText":"",
            "inStockOnly":false,
            "rawdata_list":[
              {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
              {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
              {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
              {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
              {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
              {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
            ]
        }
        this.filterTextChange = this.filterTextChange.bind(this);
        this.inStockOnlyChange = this.inStockOnlyChange.bind(this);
    }

    filterTextChange(filterText){
        this.setState({
            filterText:filterText
        })
    }
    inStockOnlyChange(inStockOnly){
        this.setState({
            inStockOnly:inStockOnly
        })
    }

    render(){
        let data_list = "";
        if(this.state.inStockOnly){
            data_list = this.state.rawdata_list.filter((item)=>{
                if(item.stocked){
                    return true
                }else{
                    return false
                }
            })
        }else{
            data_list = this.state.rawdata_list
        }
        if(this.state.filterText!==""){
            data_list = this.state.rawdata_list.filter((item)=>{
                if(item.name.indexOf(this.state.filterText)!== -1){
                    return true
                }else{
                    return false
                }
            })
        }
        return (
            <div className="FilterableProductTable">
                <SearchBar
                    filterText = {this.state.filterText}
                    inStockOnly = {this.state.inStockOnly}
                    filterTextChange = {this.filterTextChange}
                    inStockOnlyChange = {this.inStockOnlyChange}
                ></SearchBar>
                <ProductTable data_list={data_list}></ProductTable>
            </div>
        );
    }
}

export default FilterableProductTable;