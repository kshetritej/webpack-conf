# Webpack Configuration

This repository is created following along the video on Youtube from [Traversy Media](https://www.youtube.com/watch?v=IZGNcSuwBZs&t=1370s). Here, he also created a simple app to create 'Dad Jokes'. 

### First thing First
* Run 
```
npm init -y
```
to create `package.json` file (The `-y` flag will help to skip questions) then,
* Install webpack and webpack-cli using 
```
npm i -D webpack webpack-cli
```
_it will install `node_modules` and `package-lock.json` with webpack and webpack-cli_
* You can copy only `webpack.config.js` for your webpack setup and add scripts
    ``` 
    "build": 'webpack',
    "dev": 'webpack server',
    ```
on `package.json` for running dev server using 
```
npm run dev
```
You will be prompted to install dependencies when running dev server for first time.Enter `Y` and press __Enter__.

### For installing plugins and loaders

1. For installing `HtmlWebpackPlugin` plugin run 
    ```
    npm i -D html-webpack-plugin
    ```
2. For installing __loaders__ run
    ```
    npm i -D sass style-loader css-loader sass-loader
    ```
    _You only need to install `style-loader` and `css-loader` if you are not using `sass`._

3. For __babel__ which is used for backwards compatibility
    ```
    npm i -D babel-loader @babel/core @babel/preset-env
    ```
4. You can copy the configuration file with messy comments from here, for only code version open original source
```
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
```
__Feel free to make changes as required.__
