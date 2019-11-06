let count = 0;
let num;

function getCount8() {
  for (let i = 1; i <= 10000; i++){
    num = i + '';
    for (let j = 0; j < num.length; j++){
      if (num[j] === '8')
        count++;
    }
  }
  return count;
}

console.log(getCount8());