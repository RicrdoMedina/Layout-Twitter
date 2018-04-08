const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname,'src/js/index.js'),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'js/bundle.js',
  },
  devServer:{
    //Indicamos al dev server que use el HotModuleReplacement
    port: 8080,
    hot: true,
    open: true
  },
  module:{
    rules: [
      {
        test: /\.(js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, './src')]
      },
      {
        test:/\.css$/,
        //Indicamos los loaders que se van a extraer
        use:['style-loader', 'css-loader','postcss-loader']
      },
      {
        test:/\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use:{
          loader: 'url-loader',
          options: {
            limit: 100000,
          }
        }
      },
      {
        test:/\.js$/,
        use:{
          loader: 'babel-loader',
          //Agregar configuracion especial para agregar los preset con las versiones ecmascript que le daremos soporte
          options: {
            presets: ['es2015','es2016']
          }
        }
      },
    ]
  },
  plugins: [
    //Activar HotModuleReplacement
    new webpack.HotModuleReplacementPlugin(),
  ]
}