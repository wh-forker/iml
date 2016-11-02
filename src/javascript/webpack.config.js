var path = require("path");

var buildDir = path.resolve(__dirname, 'build');
module.exports = {
  entry: {bundle: "./index.jsx", test_bundle: "./test.js"},
  output: {
    path: buildDir,
    filename: "[name].js"
  },

  module: {
    loaders: [
      {
        test: /\.css$/, loader: "style!css"
      },
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
