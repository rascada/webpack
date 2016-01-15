var webpackConf = require('./webpack.base.conf');
delete webpackConf.entry;

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['tap'],
    reporters: ['spec'],
    files: ['../test/unit/index.js'],
    preprocessors: {
      '../test/unit/index.js': ['webpack'],
    },
    webpack: webpackConf,
    webpackMiddleware: {
      noInfo: true,
    },
  });
};
