// 콜백 함수를 전달받는 함수
function print(f) {
  var string = 'Hello';
  // 콜백 함수를 전달받는 함수가 콜백 함수의 호출 시기를 결정하고 호출
  return f(string);
}

// print 함수에 콜백 함수를 전달하면서 호출
var res1 = print(function (a) {
  return a.toUpperCase();
});

// print 함수에 콜백 함수를 전달하면서 호출
var res2 = print(function (str) {
  return str.toLowerCase();
});

console.log(res1, res2); // HELLO hello