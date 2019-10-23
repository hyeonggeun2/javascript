const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function sortBy(key) {
  const sortarr = todos.slice();
  sortarr.sort(function (a, b){
    return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
  });
  return sortarr;
}

console.log(sortBy('id'));
console.log(sortBy('content'));
console.log(sortBy('completed'));