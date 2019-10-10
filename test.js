var star = '';
var line = 5;
for (var i = 1; i <= line; i++) {
  for (var j = 1; j <= line * 2 - 1; j++) {
    if (j >= 6 - i && j <= 4 + i){
      star += '*';
    } else {
      star += ' ';
    }
  }
  star += '\n';
}
console.log(star);