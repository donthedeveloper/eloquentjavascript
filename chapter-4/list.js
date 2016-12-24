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
    if (obj.rest === null) {
      returnArr.push( obj.value );
    } else {
      returnArr.push(obj.value);
      recursion(obj.rest)
    }
  }
  
  returnArr.push(list.value);
  recursion(list.rest);
  
  return returnArr;
  
}


console.log( arrayToList([10, 20]) );
console.log( listToArray( arrayToList([10, 20, 30]) ) );