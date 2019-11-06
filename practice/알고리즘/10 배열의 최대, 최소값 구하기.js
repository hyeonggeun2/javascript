function getMaxValueFromArray(array) {
  return Math.max(...array);
}
function getMinValueFromArray(array) {
  return Math.min(...array);
}

console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5