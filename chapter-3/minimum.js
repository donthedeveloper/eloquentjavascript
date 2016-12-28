function min(num1, num2) { 
  return num1 > num2 ? num2 : num1;
}


function isEven(num) {
  return num % 2 ? false : true;
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));