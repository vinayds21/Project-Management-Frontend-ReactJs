var debug = process.env.NODE_ENV !== "production";
// make sure to import this
var webpack = require('webpack')

var path = require('path');
module.exports = {
  devtool: debug ? "eval" : null,
  context: path.join(__dirname, './app'),
  entry: {
    js: ['babel-polyfill','./index.js'],
    vendor: [
      'react', 'react-dom', 'material-ui','react-mdl','jquery','moment'
    ]
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js'
  },

  // context: __dirname,
  // entry: './app/index.js',
  // output: {
  //   path: __dirname + "/public/",
  //   filename: "bundle.js"
  // },


  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        // include: [
        //   path.resolve(__dirname, "app/assets")
        // ],
        loader: 'babel-loader?presets[]=es2015&presets[]=react' 
      },{
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },

  // add this handful of plugins that optimize the build
  // when we're in production

  plugins: !debug ? [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      // Don't beautify output (enable for neater output)
      beautify: false,

      // Eliminate comments
      comments: false,

      // Compression specific options
      compress: {
        warnings: false,

        // Drop `console` statements
        drop_console: true
      },
    })
  ] : [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      // Don't beautify output (enable for neater output)
      beautify: false,

      // Eliminate comments
      comments: false,

      // Compression specific options
      compress: {
        warnings: false,
      },
    })
  ]
}
