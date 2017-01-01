var ancestry = JSON.parse( require('./ancestry.js') );
var ageDifference = [];
var byName = {};

var personYearBorn = 0;
var motherName = '';
var motherYearBorn = 0;


function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}


ancestry.forEach(function(person) {
  byName[person.name] = person;
});

for (var key in byName) {
  if (byName[key].mother !== null) {
    personYearBorn = byName[key].born;
    motherName = byName[key].mother;
    if (byName.hasOwnProperty(motherName)) {
      motherYearBorn = byName[motherName].born;
      ageDifference.push(personYearBorn - motherYearBorn);
    }
  }
  
  ancestry.filter(function(person) {
    
  });
}

console.log( average(ageDifference) );