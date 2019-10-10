/* 14번 문제 */
var star = '';
var line = 5;
console.log('\n14번 문제');
for (var i = 1; i <= line; i++){
  for (var j = 1; j <= line; j++){
    if ((i + j) > line) star += '*';
    else star += ' ';
  }
  star += '\n';
}
console.log(star);