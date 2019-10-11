function draw(pattern, line){
  var symbol = 'x';
  return pattern(line, symbol);
}

function pattern1(line, symbol) {
  var result = '';
  for (var i = 1; i <= line; i++){
    for (var j = i; j <= line; j++)
      result += symbol;
    result += '\n';
  }
  console.log(result);
}

function pattern2(line, symbol) {
  var result = '';
  for (var i = 1; i <= line; i++){
    for (var j = i; j <= line; j++)
      result += ' ';
    for (var j = 1; j <= i; j++)
      result += symbol;
    result += '\n';
  }
  console.log(result);
}

draw(pattern1, 5);
draw(pattern2, 5);