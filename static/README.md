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
- react-router-redux: router 与 redux 的连接器
- classnames: 快速生成react className
- lodash: 工具库


