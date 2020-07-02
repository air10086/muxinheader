module.exports = {
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            [
              'import',
              { libraryName: 'antd', libraryDirectory: 'es', style: true },
            ], // antd按需加载
          ],
        },
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              attrs: [':data-src'],
              name: 'images/[name].[ext]',
              limit: 10000,
            },
          },
        ],
      },

      {
        test: /\.(htm|html)$/i,
        use: ['html-withimg-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              modifyVars: {
                '@primary-color': '#FF6F00',
              },
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /src/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
    ],
  },
}
