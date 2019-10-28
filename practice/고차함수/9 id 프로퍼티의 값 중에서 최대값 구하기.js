let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
  todosID = todos.map(todo => todo.id);
  return Math.max(...todosID);
}

console.log(getMaxId()); // 3