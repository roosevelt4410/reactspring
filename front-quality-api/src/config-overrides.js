const webpack = require('webpack');

module.exports = function override(config, env) {
  config.plugins.push(
    new webpack.IgnorePlugin({
      resourceRegExp: /autolinker/,
    })
  );

  config.plugins.push(
    new webpack.IgnorePlugin({
      resourceRegExp: /source-map-loader/,
    })
  );

  return config;
};
