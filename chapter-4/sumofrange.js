function range(start, end, step) {
  if (typeof step === 'undefined') {
    step = 1;
  }
  var returnArr = [];
  
  function determineCondition() {
    if (step < 0) {
      if (i >= end) {
        return true;
      } else {
        return false;
      }
    } else if (step > 0) {
      if (i <= end) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  for (var i = start; determineCondition(); i += step) {
    returnArr.push(i);
  }
  
  return returnArr;
}


function sum(arr) {
  return arr.reduce(function(acc, elem) {
    return acc + elem;
  }, 0);
}


console.log( sum( range(1, 10) ) );
console.log( sum( range(1, 10, 2) ) );
console.log( sum( range(5, 2, -1) ) );