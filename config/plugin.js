'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  },

  //允许跨域请求
  cors: {
    enable: true,
    package: 'egg-cors'
  },

  jwt: {
    enable: true,
    package: 'egg-jwt'
  }
};
