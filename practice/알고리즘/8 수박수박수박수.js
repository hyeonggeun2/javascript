function waterMelon(n) {
  const repeatNum = n / 2;
  const plusNum = n % 2;
  const waterMelonChar = '수박';
  let newStr = '';
  newStr = waterMelonChar.repeat(repeatNum);
  if (plusNum === 1) newStr += '수';
  return newStr;
}

console.log('n이 3인 경우: ' + waterMelon(3));
console.log('n이 4인 경우: ' + waterMelon(4));