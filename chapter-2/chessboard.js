function loopThrough(num) {
  for (var i = 0; i < num; i++) {
    
  }
}

function createChessBoard(num) {
  for (var i = 1, output = ''; i <= num; i++) {
    
    if (i % 2 === 0) {
      while (output.length < num) {
        if ( output.charAt(output.length - 1) === '#') {
          output += ' ';
        } else {
          output += '#';
        }
      }
    } else {
      while(output.length < num) {
        if ( output.charAt(output.length - 1) === ' ') {
          output += '#';
        } else {
          output += ' ';
        }
      }
    }
    
    console.log(output);
    output = ''; // reset
  }
}

createChessBoard(5);