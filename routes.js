/*
 * @copyright 2015 Ryan Lee
 * @copyright 2015 Jonathan Wilkerson
 */

'use strict';
/*jslint node:true, indent:2, nomen:true*/

var Signin = require('./cntl/signin.js');
var Battle = require('./cntl/battle.js');

module.exports = function (app) {

  var signin = new Signin();
  var battle = new Battle();

  app.get(
    '/',
    signin.renderSignin.bind(signin)
  );

  app.get(
    '/battle',
    battle.render.bind(battle)
  );

  app.get(
    '/jon',
    function (request, response, nextHandler) {
      response.send('hello world'); //i had a typo here
    }
  );
};
