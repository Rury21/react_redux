const path = require('path');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    url: false,
                }
            },
            {
              loader: 'sass-loader',
            }            
        ],
      },      
    ]
  },
    devServer: {
    contentBase: './dist',
  },
};