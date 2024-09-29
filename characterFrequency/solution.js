const characterFrequency = function(string) {
    const frequencyMap = new Map();
      for (let char of string) {
      frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
    const sortedFrequency = [...frequencyMap.entries()].sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0].localeCompare(b[0]);
      } else {
        return b[1] - a[1];
      }
    });
  
    return sortedFrequency;
  };