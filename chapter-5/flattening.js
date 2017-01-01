var arrays = [[1, 2, 3], [4, 5], [6], 7];

var newArray = arrays.reduce(function(acc, elem) {
  return acc.concat(elem);
}, []);

console.log(newArray);