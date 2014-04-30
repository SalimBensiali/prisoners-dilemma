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

var getScore = exports.getScore = function (move1, move2) {
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

exports.always_cooperate = function () {
    return 0;
};

exports.always_betray = function () {
    return 1;
};

exports.tit_for_tat = function (other_player_previous_move) {
    return other_player_previous_move === -1? 0: other_player_previous_move;
};

exports.game = function (strategy1, strategy2) {
    var iterations = 1000 + 1,
        final_score = [0, 0],
        score,
        moves = [-1, -1];

    while (--iterations) {
        moves = [strategy1(moves[1]), strategy2(moves[0])];
        score = getScore(moves[0], moves[1]);
        final_score[0] += score[0];
        final_score[1] += score[1];
    }

    return final_score;
};
