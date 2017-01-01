var ancestry = JSON.parse( require('./ancestry.js') );

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var newArray = [ [],[],[],[],[],[] ];
var century = 0;
var age = 0;

ancestry.forEach(function(person) {
  // get age
  age = person.died - person.born;
  // get century
  century = Math.ceil(person.died / 100);
  
  newArray[century - 16].push(age);
});

newArray = newArray.map(function(cent) {
  return cent.reduce(function(acc, age) {
    return acc + age
  }, 0) / cent.length;
});

newArray.forEach(function(elem) {
  console.log(newArray.indexOf(elem) + 16 + ": " + elem);
});