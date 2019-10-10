/* 12번 문제 */
var line = 5;
var star = '';
console.log('\n12번 문제');
for (var i = 1; i <= line; i++){
  for (var j = 1; j <= line; j++){
    if (i > j) star += ' ';
    else star += '*';
  }
  star += '\n';
}
console.log(star);