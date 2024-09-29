/**
 * @function waterVolume
 * @param {Array<Number>} hgts - An array representing the heights of adjoining buildings.
 * @return {Number} - The maximum amount of water that can be collected between the buildings.
 */
function waterVolume(hgts) {
    let leftMax = 0, rightMax = 0, waterVolume = 0;
  
    let left = 0, right = hgts.length - 1;
    
    while (left < right) {
      if (hgts[left] < hgts[right]) {
        hgts[left] >= leftMax ? (leftMax = hgts[left]) : (waterVolume += leftMax - hgts[left]);
        left++;
      } else {
        hgts[right] >= rightMax ? (rightMax = hgts[right]) : (waterVolume += rightMax - hgts[right]);
        right--;
      }
    }
    
    return waterVolume;
  }
  
  module.exports = waterVolume;
  