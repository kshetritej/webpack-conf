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
    ```npm i -D html-webpack-plugin```
2. For installing loaders run
    ```npm i -D sass style-loader css-loader sass-loader```
3. For babel which is used for backwards compatibility
    ```npm i -D babel-loader @babel/core @babel/preset-env```