/*
 * prisoners-dilemma
 * https://github.com/SalimBensiali/prisoners-dilemma
 *
 * Copyright (c) 2014 sbensiali
 * Licensed under the MIT license.
 */

'use strict';

exports.awesome = function() {
  return 'awesome';
};

exports.getScore = function (move1, move2) {
    // a move is either 0 or 1
    // 0 means silent
    // 1 means betraying
    var out;

    if (move1) {
        out = move2? [3, 3]: [0, 5];
    } else {
        out = move2? [5, 0]: [1, 1];
    }

    return out;
};

