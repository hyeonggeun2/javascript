function numPY(s) {
  let countp = 0;
  let county = 0;
  if (s === undefined)
    return true;
  for (let i = 0; s[i] !== undefined; i++){
    if (s[i] === 'p' || s[i] === 'P')
      countp++;
    if (s[i] === 'y' || s[i] === 'Y')
      county++;
  }
  if (countp === county)
    return true;
  else return false;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false
console.log(numPY('ab')); // true
console.log(numPY('')); // true
console.log(numPY()); // true