function checkPalindrom(str) {
  for (let i = 0; i < (str.length / 2); i++)
    if (str[i] !== str[str.length - i - 1]) return false;
  return true;
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true