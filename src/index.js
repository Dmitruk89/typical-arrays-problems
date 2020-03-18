
exports.min = function min (array) {
  
  if (array == undefined){
    return 0;
    } else if (array.length == 0) {
      return 0;
    }
  
  let minValue = Math.min (...array);
  return minValue;
  
  

  
}

exports.max = function max (array) {

  if (array == undefined){
    return 0;
    } else if (array.length == 0) {
      return 0;
    }
  

  let maxValue = Math.max (...array);
  return maxValue;
}

exports.avg = function avg (array) {

  if (array == undefined){
    return 0;
    } else if (array.length == 0) {
      return 0;
    }
  

  let sumValue = array.reduce (function (a,b) {
    return (a + b);
  })
  let avgValue = sumValue/array.length
  return avgValue;
}
