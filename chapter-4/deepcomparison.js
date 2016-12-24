function deepEqual(obj1, obj2) {
  // check that both values are objects && they are not null
  if (typeof obj1 === 'object' && typeof obj2 === 'object' && obj1 && obj2) {
    for (var key in obj1) {
      // check that 2nd object has same property
      if ( !obj2.hasOwnProperty(key) ) {
        return false
      }
      
      // check if both values of current key are objects
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        
        if ( deepEqual(obj1[key], obj2[key]) === false) {
          return false;
        }
      } else {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }
      
    }

  } else if (obj1 !== obj2) {
    return false;
  }
  
  return true;
}


var obj = {
  here: {
    is: "an"
  },
  object: 2
};

console.log( deepEqual(obj, obj) );
console.log( deepEqual(obj, {here: 1, object: 2}) );
console.log( deepEqual(obj, {here: {is: "an"}, object: 2}) );