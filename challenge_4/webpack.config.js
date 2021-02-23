const webpack = require('webpack');
var path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'client/App.jsx'),

  output: {
    filename: 'App.js',
    path: path.join(__dirname, '/public')
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },


};


// module.exports = {
//   entry: __dirname + '/client/src/index.jsx',
//   output: {
//     filename: 'app.js',
//     path: __dirname + '/client/dist'
//   },
//   module: {
//     rules: [
//       {
//         test: [/\.jsx$/],
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-react', '@babel/preset-env']
//           }
//         }
//       }
//     ]
//   },

// };