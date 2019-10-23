let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function addTodo(newTodo) {
  todos = todos.reduce((pre, cur) => pre.concat(cur), [newTodo]);
}

addTodo({ id: 4, content: 'Test', completed: false });

console.log(todos);