# Webpack Configuration

This repository is created following along the video on Youtube from [Traversy Media](https://www.youtube.com/watch?v=IZGNcSuwBZs&t=1370s). Here, he also created a simple app to create 'Dad Jokes'. 

### First thing First
* Run `npm init -y` to create `node_modules` and `package.json` files(The `-y` flag will help to skip questions) then
* Install webpack and webpack-cli using `npm i -D webpack webpack-cli`

* You can copy only `webpack.config.js` for your webpack setup and add scripts
    ` "build": 'webpack',
      "dev": 'webpack server',
    `
on `package.json` for running dev server using `npm run dev`. You will be prompted to install dependencies when running dev server for first time.

### For installing plugins and loaders

1. For installing `HtmlWebpackPlugin` run 
    ```
    npm i -D html-webpack-plugin
    ```
2. For installing loaders run
    ```
    npm i -D sass style-loader css-loader sass-loader
    ```
3. For babel which is used for backwards compatibility
    ```
    npm i -D babel-loader @babel/core @babel/preset-env
    ```
4. If you are lazy to open the code file, Here it is
```
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry:{
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename : '[name][ext]',
    },
    // devtool: 'source-map',
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
                test: /\.scss$/,
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
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ],
}
```
__Feel free to make changes if required.__