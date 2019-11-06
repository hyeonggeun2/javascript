function toWeirdCase(s) {
  let newstr = '';
  for (let i = 0; i < s.length; i++){
    if (s[i] === ' '){
      newstr += ' ';
      continue;
    }
    newstr += s[i++].toUpperCase();
    if (s[i] === undefined) break;
    newstr += s[i].toLowerCase();
  }
  return newstr;
}

console.log(toWeirdCase('heLLO WOrld'));
console.log(toWeirdCase('my nAmE IS LEE'));