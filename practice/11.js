/* 11번 문제 */
console.log('\n11번 문제');
var line = 5;
var star = '';
for (var i = 1; i <= line; i++){
  for (var j = 1; j <= i; j++)
    star += '*';
  star += '\n';
}
console.log(star);


/*
for (var i = 1; i <= line; i++){
  star += '*';
  console.log(star);
}
*/