function reverseArray(arr) {
  var reversedArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}


function reverseArrayInPlace(arr) {
  for (var i = 1, temp; i < arr.length; i++) {
    arr.unshift( arr.splice(i, 1)[0] );
  }  
  return arr;
}


console.log( reverseArray(['A', 'B', 'C']) );
console.log( reverseArrayInPlace([1, 2, 3, 4, 5]) );

// Thoughts after looking at hints
/* For the first function, if I used unshift instead of push, I would have a more common loop that increments instead of decrements.
For the second function, they mentioned using slice was cheating. I used splice.. I'm not sure if I cheated or not :( '*/