## 目录结构
- cfg: webpack 配置文件
- store.js: redux store creator
- src: 源代码目录
    - pages: 页面级组件
    - constants: 常量配置
    - reducers: redux reducer 拆分
    - actions: redux action 拆分
    - utils: 工具集函数


## package.json

#### devDependencies
- webpack: 打包工具选择webpack
- babel: es6 -> es5
- babel-loader: es6 -> es5
- css-loader: 将编译好的css传递给下一步骤
- style-loader: 将最终样式引入到生成的代码中
- url-loader: Loads files as `base64` encoded URL
- file-loader: 解析项目中的url，使之指向正确的地址，一般与url-loader成对出现，如果不添加，npm install 的时候会出现 warning
- http-server: 基于nodejs的http服务器
- open: Open a file or url in the user's preferred application.
- webpack-dev-server: 一个小型的node.js Express服务器
- minimist: 轻量级的命令行参数解析引擎, 支持IE9及以上
- redux-devtools-extension: redux 可视化工具，搭配chrome插件redux-devtools使用
- redux-logger: redux 日志工具
- html-webpack-plugin: 生成html文件

#### dependencies
- react: react核心依赖
- react-dom: react生成DOM节点必备依赖
- react-router-dom: react-router核心依赖
- redux: redux 核心库
- react-redux: react 专用 redux 库
- redux-thunk: 使 redux dispatch 能接收函数参数
- react-router-redux: router 与 redux 的连接器
- classnames: 快速生成react className
- lodash: 工具库

### script

## webpack config

### entry
- 是字符串时，定义入口文件；
- 是数组时，包含入口文件，另一个参数可以是用来配置 webpack 提供的一个静态资源服务器，webpack-dev-server。webpack-dev-server会监控项目中每一个文件的变化，实时的进行构建，并且自动刷新页面。
- 是对象时，多入口文件。

### output
- 参数为对象，定义构建后的文件输出。当在entry中定义多文件时，filename 可以对应的更改为 [name].js 用于定义不同文件构建后的名字。

### module

### resolve
- extension: 配置自动补全文件后缀

### plugins
- webpack.NoErrorsPlugin(): 跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
- extract-text-webpack-plugin: 把 css 从 bundle 中独立出来。

### externals
- 在 require 类库时，不想被打包，在这里配置。


