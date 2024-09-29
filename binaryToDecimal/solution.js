function binaryToDecimal(binaryString) {
    let decimalNumber = 0;
  
    for (let i = binaryString.length - 1, j = 0; i >= 0; i--, j++) {
      if (binaryString[i] === '1') {
        decimalNumber += 2 ** j;
      }
    }
  
    return decimalNumber;
  }