var sumNum = 0;
console.log('\n9번 문제');
for (var i = 1; i < 20; i++){
  if (!(i % 2) || !(i % 3))
    sumNum += i;
}
console.log(sumNum);