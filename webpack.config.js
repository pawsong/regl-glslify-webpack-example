module.exports = {
  entry: './src/entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.json/, loader: 'json' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
};
