function numberOfPrime(n) {
  let count = 0;
  for (let i = 2; i <= n; i++){
    for (let j = 2; j < i; j++){
      if (i / j > 1 && i % j === 0) break;
      else count++;
    }
  }
  return count;
}

console.log(numberOfPrime(10)); // 4

// 자신 이외에는 항상 나머지가 존재