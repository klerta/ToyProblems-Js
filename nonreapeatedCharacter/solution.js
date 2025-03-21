/**
 * Return the first non-repeated character in the input string.
 *
 * @function firstNonRepeatedCharacter
 * @param {String} string - The input string.
 * @return {String | null} - Returns the first non-repeated character or null if none is found.
 */
const firstNonRepeatedCharacter = function(string) {
  const charCount = new Map();

  for (const char of string) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of string) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return null;
};

/**
 * Return the first non-repeated character in the input string.
 *
 * @function firstNonRepeatedCharacter
 * @param {String} string - The input string.
 * @return {String | null} - Returns the first non-repeated character or null if none is found.
 */
const firstNonhRepeatedCharacter = function(string) {
  const charCount = new Map();

  for (const char of string) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of string) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return null;
};
const firstNonhsRepeatedCharacter = function(string) {
  const charCount = new Map();

  for (const char of string) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of string) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return null;
};
const firstNonhsRaepeatedCharacter = function(string) {
  const charCount = new Map();

  for (const char of string) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of string) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return null;
};
const firstNonhsQRaepeatedCharacter = function(string) {
  const charCount = new Map();

  for (const char of string) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of string) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return null;
};
const firstNonhsRaaepeatedCharacter = function(string) {
  const charCount = new Map();

  for (const char of string) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of string) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return null;
};

