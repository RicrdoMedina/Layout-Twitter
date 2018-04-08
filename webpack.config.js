const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = (env) => {

  const plugins = [
    new ExtractTextPlugin('css/[name].css')
  ]
  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], {root:__dirname})
    )
  }

  return {
    entry: path.resolve(__dirname,'src/js/index.js'),
    output: {
      path: path.resolve(__dirname,'dist'),
      filename: 'js/bundle.js',
      //Especificar de donde el navegador va a buscar nuestros archivos
      publicPath: path.resolve(__dirname,'dist')+"/",
      //Definir un hash para los chunk extraidos
      chunkFilename:'js/[id].[chunkhash].js',
    },
    module:{
      rules: [
        {
          test:/\.js$/,
          use:{
            loader: 'babel-loader',
            //Agregar configuracion especial para agregar los preset con las versiones ecmascript que le daremos soporte
            options: {
              presets: ['es2015']
            }
          }
        },
        {
          test:/\.css$/,
          //Indicamos los loaders que se van a extraer
          use: ExtractTextPlugin.extract({
            use:[
              // Agregar configuraciones para css
              // Para hacerlos compatible con postcss
              // Mudules: Permita importar modulos
              // importLoaders: 1 le decimos que trabaje con un solo loaders en este caso postcss-loader
              {
                loader:'css-loader',
                options: {
                  minimize: true
                }
              },
              'postcss-loader'
            ]
          }),
        },
        {
          //test: que tipo de archivo reconocer,
          //use: que loader se va a encargar del archivo
          test:/\.(jpg|png|gif|woff|eot|ttf|svg)$/,
          use:{
            loader: 'url-loader',
            //Agregar configuracion especial para agregar los preset con las versiones ecmascript que le daremos soporte
            options: {
              limit: 1,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]'
            }
          }
        },
      ]
    },
    plugins
  }
}