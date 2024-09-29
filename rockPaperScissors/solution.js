/**
 * Generate every sequence of throws a single player could throw over a three-round game of rock-paper-scissors.
 *
 * @function rockPaperScissors
 * @param {Number} rounds - Number of rounds (default is 3)
 * @return {Array<string>} - Array of sequences
 */
var rockPaperScissors = function(rounds) {
    var rounds = rounds || 3;
    var throws = ['R', 'P', 'S'];
    var sequences = [];
  
    // Helper function to generate sequences recursively
    var generateSequences = function(round, sequence) {
      if (round === 0) {
        sequences.push(sequence);
        return;
      }
  
      for (var i = 0; i < throws.length; i++) {
        generateSequences(round - 1, sequence + throws[i]);
      }
    };
  
    generateSequences(rounds, '');
  
    return sequences;
  };
  
  module.exports = rockPaperScissors;
  