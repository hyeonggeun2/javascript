function hideNumbers(str) {
  let newstr = '';
  for (let i = 0; i < str.length; i++){
    if (i < str.length - 4) newstr += '*';
    else newstr += str[i];
  }

  return newstr;
}

console.log(hideNumbers('01033334444'));
console.log(hideNumbers('027778888'));