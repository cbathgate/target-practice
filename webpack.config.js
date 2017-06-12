module.exports = {
  entry: "./client/index.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/static/"
  },

  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: "babel",
      include: __dirname,
      query: {
        presets: [ "es2015", "react", "react-hmre", "stage-1"]
      }
    }]
  }
}