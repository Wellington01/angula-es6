module.exports = {
  devtool: 'sourcemap',
  entry:{
      Admin:'./admin.js',
      Member:'./member.js',
      Coach:'./coach.js'
  },
  output: {
    path: 'build',
    filename:'[name].js'
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.css$/, loader: 'style!css' }
    ]
  }
};
