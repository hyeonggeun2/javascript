function isNotOverlapArray(array) {
  for (let i = 1; i <= array.length; i++){
    if (array.indexOf(i) === -1) return false;
  }
  return true;
}

console.log(isNotOverlapArray([4, 1, 3, 2]));
console.log(isNotOverlapArray([4, 1, 3]));