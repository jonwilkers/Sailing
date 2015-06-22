/*
 * @copyright 2015 Ryan Lee
 * @copyright 2015 Jonathan Wilkerson
 */

'use strict';
/*jslint node:true, indent:2, nomen:true*/

/**
 * Battle Controller
 * @class
 */
function Battle(opts) {
}

/**@function renderBattle
 * @instance Battle
 *
 * @param {object} req - Express Quest Object
 * @param {object} res - Express Response
 * @renders signin
 */
Battle.prototype.render = function (req, res) {
  res.render('battle', {
    'csrf' : req.csrfToken(),
    'jquery' : true
  });
};

module.exports = Battle;
