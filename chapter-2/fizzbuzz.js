function fizzBuzz() {
  var output = '';
  var printText = false;
  
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      printText = true;
      output += 'Fizz';
    }
    
    if (i % 5 === 0) {
      printText = true;
      output += 'Buzz';
    }
    
    if (!printText) {
      output += i;
    }
    
    console.log(output);
    output = '';
    printText = false;
  }  
}

fizzBuzz();