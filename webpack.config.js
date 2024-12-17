const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  


module.exports = (env) => {  
    return {
     mode: env?.NODE_ENV === 'production' ? 'production' : 'development',
     entry: './src/index.js',
     resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
     },
     output: {  
        path: path.join(__dirname, 'dist'),  
        publicPath: '/',
        filename: 'build.js',
     },  
     devServer: {  
        allowedHosts: 'all' ,
        historyApiFallback:true
      },  
     module: {  
        rules: [  
          {
              test: /\.m?js/,
              type: "javascript/auto",
              resolve: {
                fullySpecified: false,
              },
          },
          {  
              test: /\.(ts|tsx|js|jsx)$/,
              exclude: /node_modules/,  
              use: {  
                  loader: "babel-loader",  
              }  
          }  ,
          {
            test: /\.(css|s[ac]ss)$/i,
            use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader'],
          },
          {
            test: [/\.avif$/],
            loader: require.resolve('url-loader'),
            options: {
                limit: '10000',
                mimetype: 'image/avif',
                name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve('url-loader'),
              options: {
                  limit: '10000',
                  name: 'static/media/[name].[hash:8].[ext]',
              },
          },

        ]  
     },  
     plugins:[  
          new HtmlWebpackPlugin({  
              template: "./public/index.html",
          })  
        ]  
    }
  }  
  