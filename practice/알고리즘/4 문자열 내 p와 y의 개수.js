function numPY(s = '') {
  let count = 0;

  s.toLowerCase();
  for (let i = 0; i < s.length; i++){
    if (s[i] === 'p') count++;
    if (s[i] === 'y') count--;
  }

  if (count === 0) return true;
  else return false;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false
console.log(numPY('ab')); // true
console.log(numPY('')); // true
console.log(numPY()); // true