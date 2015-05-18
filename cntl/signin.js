/*
 * @copyright 2015 Ryan Lee
 * @copyright 2015 Jonathan Wilkerson
 */

'use strict';
/*jslint node:true, indent:2, nomen:true*/

/**
 * Signin Controller
 * @class
 */
function Signin(opts) {
}

/**@function renderSignin
 * @instance Signin
 *
 * @param {object} req - Express Quest Object
 * @param {object} res - Express Response
 * @renders signin
 */
Signin.prototype.renderSignin = function (req, res) {
  res.render('signin', {
    'csrf' : req.csrfToken()
  });
};


module.exports = Signin;
