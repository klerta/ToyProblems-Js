
const insertionSort = function(array) {
  for (let i = 1; i < array.length; i++) {
    let currentElement = array[i];
    let j = i - 1;

    while (j >= 0 && currentElement.value < array[j].value) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = currentElement;
  }

  return array;
};
