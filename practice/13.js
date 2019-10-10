/* 13번 문제 */
var star = '';
var line = 5;
console.log('\n13번 문제');
for (var i = line; i > 0; i--){
  for (var j = 1; j <= i; j++)
    star += '*';
  star += '\n';
}
console.log(star);