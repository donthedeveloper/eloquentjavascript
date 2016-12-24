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


console.log( arrayToList([10, 20]) );
console.log( listToArray( arrayToList([10, 20, 30]) ) );
console.log( prepend(10, prepend(20, null) ) );
console.log( nth( arrayToList([10,20,30]), 1) );