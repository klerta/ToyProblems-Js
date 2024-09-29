const alphaCount = (alphabet, text) => {
    var letterCounts = {};
  
    alphabet = alphabet.toLowerCase();
    text = text.toLowerCase();
  
    for (var i = 0; i < text.length; i++) {
      var char = text[i];
      if (alphabet.includes(char)) {
        letterCounts[char] = (letterCounts[char] || 0) + 1;
      }
    }
  
    var results = [];
  
    for (var i = 0; i < alphabet.length; i++) {
      var char = alphabet[i];
      var count = letterCounts[char] || 0;
      if (count > 0) {
        results.push(char + ':' + count);
      }
    }
  
    results.sort();
  
    var resultString = results.join(',');
  
    return resultString;
  };
  
  module.exports = alphaCount;
  