var makeChange = function(total) {
    const coins = [1, 2, 5, 10, 20, 50, 100, 200];
    const ways = new Array(total + 1).fill(0);
    ways[0] = 1;
  
    for (let coin of coins) {
      for (let i = coin; i <= total; i++) {
        ways[i] += ways[i - coin];
      }
    }
  
    return ways[total];
  };