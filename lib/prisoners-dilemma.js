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

exports.tit_for_tat = function (other_player) {
    return other_player.previous_move === -1? 0: other_player.previous_move;
};

exports.soft_majority = function (other_player) {
    var out;
    if (other_player.cooperation_count === other_player.betrial_count) {
        out = 0;
    } else {
        out = other_player.cooperation_count > other_player.betrial_count? 0: 1;
    }

    other_player[other_player.previous_move === 0? 'cooperation_count': 'betrial_count'] += 1;

    return out;
};

exports.pavlov = function (other_player, player) {
  var out;
  if (other_player.previous_move === -1) {
    out = 0;
  } else {
    out = (other_player.previous_move === player.previous_move) ? 0 : 1 ;
  }
  return out;
};

exports.game = function (strategy1, strategy2, iterations) {
    iterations = (iterations || 1000) + 1;

    var final_score = [0, 0],
        score,
        moves = [-1, -1];

    var player1 = {
        cooperation_count: 0,
        betrial_count: 0,
        previous_move: moves[0]

    }, player2 = {
        cooperation_count: 0,
        betrial_count: 0,
        previous_move: moves[1]
    };

    while (--iterations) {
        moves = [strategy1(player2, player1), strategy2(player1, player2)];

        player1.previous_move = moves[0];
        player2.previous_move = moves[1];

        score = getScore(moves[0], moves[1]);
        //console.log(score);
        final_score[0] += score[0];
        final_score[1] += score[1];
    }

    return final_score;
};
