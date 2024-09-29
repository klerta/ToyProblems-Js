
const longestRun = function (string) {
  if (!string) return null;

  let maxStart = 0;
  let maxEnd = 0;
  let currentStart = 0;
  let currentEnd = 0;

  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      currentEnd = i;
      if (currentEnd - currentStart > maxEnd - maxStart) {
        maxStart = currentStart;
        maxEnd = currentEnd;
      }
    } else {
      currentStart = i;
    }
  }

  return [maxStart, maxEnd];
};

module.exports = longestRun;
