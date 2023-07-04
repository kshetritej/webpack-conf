const path = require('path') // it will allow us to use __dirname and use paths obviously
const HtmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
    mode: 'development', // It creates minified code in bundle[contenthash].js, mode: 'production', can be used for readable outputs
    entry:{
        bundle: path.resolve(__dirname, 'src/index.js'), //Webpack will look here for the main .js file
    },
    output:{ 
        /* All about outputs path,filename,*/
        path: path.resolve(__dirname,'dist'),
        filename: '[name][contenthash].js',
        clean: true, // clears the existing file every time 'npm run build' is executed
        assetModuleFilename : '[name][ext]', // prevents filename from being overwritten by random filename
    },
    // devtool: 'source-map', //it will create a new .map.js file in dist which helps with debugging.

    // DevServer Configuration: Opens index.html from dist folder in localhost:3000,
    devServer: {
        static: {
            directory : path.resolve(__dirname,'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module:{
        rules: [
            {
                test: /\.scss$/,//RegExp -- Look for files that ends with .scss extension (if you want to look for .css files it should be /\.css$/, )
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader : 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, //Asset loader (the 'i' represents 'insensitive' for case-insensitive file names)
                type: 'asset/resource',
            }
        ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App', // Use as title in template.html using <% = HtmlWebpackPlugin.options.title %>
            filename: 'index.html', //It will be created automatically, when npm run dev is executed
            template: 'src/template.html', //Template should be defined manually
        }),
    ],
}