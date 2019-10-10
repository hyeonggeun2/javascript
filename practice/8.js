var sumNum = 0;
console.log('\n8번 문제');
sumNum = 0;
for (var i = 1; i < 20; i++){
  if ((i % 2) && (i % 3))
    sumNum += i;
}
console.log(sumNum);