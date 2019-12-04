let todos = [];

// DOMs
const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');
const $completeAll = document.querySelector('#ck-complete-all');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
const $activeTodos = document.querySelector('.active-todos');
const $completedTodos = document.querySelector('.completed-todos');

const getTodos = () => {
  // 서버로부터 todos를 취득
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];

  todos.sort((todo1, todo2) => todo2.id - todo1.id);
};

const render = () => {
  let html = '';

  todos.forEach(({ id, content, completed }) => {
    html += `
    <li id="${id}" class="todo-item">
    <input class="checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
    <label for="ck-${id}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
    </li>`
  });

  $todos.innerHTML = html;

  $completedTodos.textContent = todos.filter(todo => todo.completed).length;
  $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
};

const generateId = () => todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

const addTodo = content => {
  todos = [{ id: generateId(), content, completed: false }, ...todos];
};

const toggleCompleted = id => {
  todos = todos.map(todo => todo.id === +id ? { ... todo, completed: !todo.completed } : todo)
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
};

const completeAll = completed => {
  todos = todos.map(todo => ({ ...todo, completed }))
};

const removeCompletedAll = () => {
  todos = todos.filter(todo => !todo.completed);
};

// Events
window.onload = () => {
  getTodos();
  render();
};

$input.onkeyup = ({ target, keyCode }) => {
  const content = target.value.trim();
  if (content === '' || keyCode !== 13) return;

  target.value = '';
  addTodo(content);
  render();
};

$todos.onchange = ({ target }) => {
  toggleCompleted(target.parentNode.id);
  render();
};

$todos.onclick = ({ target }) => {
  if (!target.classList.contains('remove-todo')) return;
  removeTodo(target.parentNode.id);
  render();
}

$completeAll.onclick = ({ target }) => {
  completeAll(target.checked);
  render();
};

$clearCompleted.onclick = () => {
  removeCompletedAll();
  render();
}