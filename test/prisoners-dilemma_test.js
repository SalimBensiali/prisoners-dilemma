'use strict';

var prisoners_dilemma = require('../lib/prisoners-dilemma.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['awesome'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(1);
    // tests here
    test.equal(prisoners_dilemma.awesome(), 'awesome', 'should be awesome.');
    test.done();
  },
};

exports['getScore'] = {
    'both silent': function (test) {
        test.deepEqual(prisoners_dilemma.getScore(0, 0), [1, 1]);
        test.done();
    },
    'both betray': function (test) {
        test.deepEqual(prisoners_dilemma.getScore(1, 1), [3, 3]);
        test.done();
    },
    'first silent, second betrays': function (test) {
        test.deepEqual(prisoners_dilemma.getScore(0, 1), [5, 0]);
        test.done();
    },
    'first betrays, second silent': function (test) {
        test.deepEqual(prisoners_dilemma.getScore(1, 0), [0, 5]);
        test.done();
    }
};
