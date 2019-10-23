const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedById(id) {
  todos.map(todo => {
    if (todo.id === id)
      Object.assign(todo, todo.completed ? { completed: false } : { completed: true });
  });
}

toggleCompletedById(2);

console.log(todos);