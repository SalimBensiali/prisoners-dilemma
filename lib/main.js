'use strict';

var prisoners_dilemma = require('./prisoners-dilemma.js');

// main
var strategy1 = prisoners_dilemma[process.argv[2]],
    strategy2 = prisoners_dilemma[process.argv[3]],
    iterations = process.argv[4];

console.log(prisoners_dilemma.game(strategy1, strategy2, iterations));
