/* 16번 문제 */
console.log('\n16번 문제');
var star = '';
var line = 5;
var revLine = 0;
for (var i = 1; i <= line; i++) {
  revLine = (line - i) * 2 + 1;
  for (var k = 1; k <= i - 1; k++)
    star += ' ';
  for (var j = 1; j <= revLine; j++)
    star += '*';
  star += '\n';
}
console.log(star);