function countBs(str) {
  return countChar(str, 'B');
}


function countChar(str, char) {
  return str.split('').reduce(function(acc, elem) {
    return elem === char ? ++acc : acc;
  }, 0);
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));