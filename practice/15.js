/* 15번 문제 */
console.log('\n15번 문제');
var star = '';
var line = 5;
for (var i = 1; i <= line; i++) {
  for (var j = 1; j <= line - i; j++)
    star += ' ';
  for (var k = 1; k <= (i * 2) - 1; k++)
    star += '*';
  star += '\n';
}
console.log(star);