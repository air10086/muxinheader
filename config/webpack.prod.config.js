const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 用于将组件的css打包成单独的文件输出到`lib`目录中
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') // 压缩css代码
const TerserPlugin = require('terser-webpack-plugin') // 压缩js代码

const prodConfig = {
  mode: 'production',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader?modules'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.min.css', // 提取后的css的文件名
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: 4, // 开启几个进程来处理压缩，默认是 os.cpus().length - 1
        cache: true, // 是否缓存
        sourceMap: false,
      }),

      // 压缩css
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  externals: {
    // 定义外部依赖，避免把react和react-dom打包进来
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },

    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
}

module.exports = merge(prodConfig, baseConfig)
