var allAnagrams = function(string) {
  var result = new Set();

  var swap = function(str, index) {
    if (index === str.length - 1) {
      result.add(str);
    } else {
      for (var i = index; i < str.length; i++) {
        str = str.split('');
        [str[index], str[i]] = [str[i], str[index]]; // Swap characters
        swap(str.join(''), index + 1); // Recursively generate anagrams
        [str[index], str[i]] = [str[i], str[index]]; // Swap back to original order
      }
    }
  };

  swap(string, 0);
  return Array.from(result);
};