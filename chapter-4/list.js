function arrayToList(arr) {
  var list = null;
  
  for (var i = arr.length-1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list
    };
  }
  
  return list;
}


function listToArray(list) {
  var returnArr = [];
   
  function recursion(obj) {
    returnArr.push( obj.value );
    
    if (obj.rest !== null) {
      recursion(obj.rest);
    }
  }
  
  recursion(list);  
  return returnArr;
}

// this is the clever version of the function above given by the hints, i love it!
function listToArray(list) {
  var arr = [];
  
  for (var node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  
  return arr;
}


function prepend(elem, list) {
  if (list === null) {
    return arrayToList([elem]);
  } else {
    return arrayToList( [elem].concat( listToArray(list) ) );
  }
}


function nth(list, index) {
  return listToArray(list)[index];
}

// this is the recursive version of nth hinted by the.. hints!
function nth(list, index) {
  if (!index) {
    return list.value;
  } else {
    return nth(list.rest, index-1);
  }
}


console.log( arrayToList([10, 20]) );
console.log( listToArray( arrayToList([10, 20, 30]) ) );
console.log( prepend(10, prepend(20, null) ) );
console.log( nth( arrayToList([10,20,30]), 5) );