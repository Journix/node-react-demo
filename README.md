## 目录结构


## package.json

### devDependencies

### dependencies

## webpack plugin

### html-webpack-plugin

主要作用：
- 为html引入资源如 `script`、`link`动态添加每次complile之后的hash，解决缓存问题
- 生成html文件

原理：
将 webpack 中 `entry` 配置的入口 thunk 和 `extract-text-webpack-plugin` 抽取的css样式，插入到该插件提供的 `template` 或者 `templateContent` 配置项指定的内容基础上生成一个HTML文件，具体插入方式是将 `link` 插入到 `head` 元素中，`script` 插入到 `head` 或者 `body` 中

配置项：
- 不配置参数，默认将 webpack 中的 entry 配置所有入口 thunk 和 `extract-text-webpack-plugin` 抽取的css样式都插到文件指定的位置。
- title: html文档标题，不会替换，除非使用模板引擎
`<title>{%= htmlWebpackPlugin.options.title %}</title>`
- filename: 输出文件名，默认为 index.html; 可以添加目录，如 `html/index.html`, 目录是相对于 webpackConfig.output.path 路径而言的，不是相对于当前项目目录结构的。指定生成的HTML文件中的 link 和 script 路径是相对于生成目录下的。htmlWebpackPlugin是 `html-webpack-plugin`插件在生成html文件过程中产生的数据。
- template: 为 template指定的模板温江没有指定任何loader的话，默认使用ejs-loader。
- templateContent: string|function, 可以指定模板的内容，不能与template共存。
- inject:
    - true|body: 所有js插到body底部
    - head: 所有js插到head元素中
    - false: 所有js和css都不会注入到模板文件中
- favicon: 同title
- hash: true|false,是否添加hash值
- chunks: 允许插入到模板中的一些chunk,不配置则默认将entry中所有的thunk注入。多在多页面中使用。
- chunksSortMode: none|auto|function, thuck 排序
- xhtml: true|false, 是否渲染link为自闭和。
- cache: true|false
- showErrors: true|false, 将错误输出到html页面中。
- minify: {...}|false; 传递html-minifier 给 minify输出，false就是不使用html压缩。


参考：
- https://www.cnblogs.com/wonyun/p/6030090.html



