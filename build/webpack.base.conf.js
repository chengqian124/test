'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {//入口文件
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,//路径是config目录下的index.js中的build配置中的assetsRoot，也就是dist目录
    filename: '[name].js',//输出文件的名字，与prod整合时，会被替换成prod里的命名风格
    publicPath: process.env.NODE_ENV === 'production'//根据环境变量选择路径
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],//告诉webpack需要执行的文件
    alias: {
      'vue$': 'vue/dist/vue.esm.js',//简化导入代码
      '@': resolve('src'),//一键回到src文件
    }
  },
  module: {
    rules: [
      {//vue文件转化成js文件
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {//ES6转ES5， JSX转JS
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {// 资源加载器，下同
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {//sass-loader加载器，使webpack可以识别scss/sass文件，默认使用node-sass进行编译，style-loader将处理结束的CSS代码存储在js中，运行时嵌入<style>后挂载至html页面上，加载器，使webpack可以识别css模块，css-loader
        test: /\.sass$/,
        loader: 'sass-loader!style-loader!css-loader',
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
