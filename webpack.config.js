const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebPackPlugin = require("clean-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin.js")

module.exports = {
    entry: {
        path:"./main.js"
    },
    resolve:{
        extensions:[".vue",".js",".css"],
        alias: {
            vue:"vue/dist/vue.esm.js",
            "@": path.resolve(__dirname,"./src")
        }
    },
    devtool:"cheap-module-eval-source-map",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    devServer:{
        contentBase:path.resolve(__dirname,"./dist")
    },
    module: {
        rules:[
            {
                test:/\.vue/,
                use:"vue-loader"
            },
            {
                test:/\.(svg|png|jpg|jpeg|webp)$/,
                use:"url-loader"
            },
            {
                test:/\.css/,
                use:["style-loader","css-loader"]
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,"./index.html")
        }),
        new CleanWebPackPlugin(),
        new VueLoaderPlugin()
    ]
}