/*
 * @copyright 2015 Ryan Lee
 * @copyright 2015 Jonathan Wilkerson
 */

'use strict';
/*jslint node:true, indent:2, nomen:true*/

var Signin = require('./cntl/signin.js');

module.exports = function (app) {

  var signin = new Signin();

  app.get(
    '/',
    signin.renderSignin.bind(signin)
  );
};
