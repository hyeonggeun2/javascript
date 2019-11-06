function alphaString46(s = '') {
  if (s.length < 4 || s.length > 7)
    return false;
  const myRegExp = /^\d+$/;
  return myRegExp.test(s);
}

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723')); // false
console.log(alphaString46('a234')); // false
console.log(alphaString46('')); // false
console.log(alphaString46()); // false