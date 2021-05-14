/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1620883725732_1348';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  // 设置可以使用post
  config.security = {
    csrf: {
      enable: false
    }
  }

  // 设置允许跨域请求
  config.cors = {
    origin: "*",
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }
  //设置默认模版引擎为nunjucks
  config.view = {
    defaultViewEngine: 'nunjucks'
  }

  return {
    ...config,
    ...userConfig,
  };
};
