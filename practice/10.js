/* 10번 문제 */
console.log('\n10번 문제');
for (var i = 1; i < 6; i++){
  for (var j = 1; j < 6; j++){
    if (i + j === 6)
      console.log(`[ ${i},${j} ]`);
  }
}