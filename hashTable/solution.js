var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index] || [];

    for (var i = 0; i < bucket.length; i++) {
      var pair = bucket[i];
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    storage[index] = bucket;
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index] || [];

    for (var i = 0; i < bucket.length; i++) {
      var pair = bucket[i];
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return undefined;
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index] || [];

    for (var i = 0; i < bucket.length; i++) {
      var pair = bucket[i];
      if (pair[0] === key) {
        bucket.splice(i, 1);
        return;
      }
    }
  };

  return result;
};

var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
