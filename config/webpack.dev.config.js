const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const devConfig = {
  mode: 'development', // 开发模式
  entry: path.join(__dirname, '../example/src/app.js'), // 项目入口，处理资源文件的依赖关系
  output: {
    path: path.join(__dirname, '../example/src/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.css$/,
        exclude: '/.min.css$/',
        loader: ['style-loader', 'css-loader?modules'],
      },
      {
        test: /\.min\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '../example/src/'),
    compress: true,
    host: '127.0.0.1',
    port: 3000,
    open: true,
  },
}

module.exports = merge(devConfig, baseConfig) // 将baseConfig和devConfig合并为一个配置
