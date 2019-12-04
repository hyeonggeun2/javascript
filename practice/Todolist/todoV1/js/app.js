let todos = [];

const $input = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $checkAllBox = document.querySelector('.complete-all');
const $completeAll = document.querySelector('#ck-complete-all');
const $clearCompleted = document.querySelector('.clear-completed');
const $completedTodosNum = document.querySelector('.completed-todos');
const $actTodoNum = document.querySelector('.active-todos');

function Maxid () { // 값 추가를 위한 id 획득 (빈 배열일 때 예외처리 해주어야 함)
  if(todos.length === 0) return 1;
  const id = todos.map(todo => todo.id);
  return Math.max(...id) + 1;
}

function render () { // 값을 그려주는 함수
  let html = '';
  todos.forEach(todo => {
    html += `
    <li id="${todo.id}" class="todo-item">
      <input class="checkbox" type="checkbox" id="ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
      <label for="ck-${todo.id}">${todo.content}</label>
      <i class="remove-todo far fa-times-circle"></i>
      </li>`
    });

    function checkCount () {
      let count = 0;
      todos.forEach(todo => {
        if (todo.completed) count++;
      });
      return count;
    }

    $completedTodosNum.innerHTML = checkCount();
    $actTodoNum.innerHTML = todos.length - checkCount();
    $todos.innerHTML = html;
  }

window.onload = function () { // 초기값 불러오기
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];

  todos.sort(function (a, b) {
    return a.id > b.id ? -1 : (a.id < b.id ? 1 : 0);
  });
  render();
}


$input.onkeyup = function (e) { // 리스트 추가
  if (e.keyCode !== 13 || $input.value.trim() === '') return;
  todos = [{ id: Maxid(), content: $input.value.trim(), completed: false }, ...todos];
  $input.value = '';
  render();
};

$todos.onclick = function (e) { // 리스트 삭제
  if (!e.target.classList.contains('remove-todo')) return;
  const id = +e.target.parentNode.id
  todos = todos.filter(todo => todo.id !== id);
  render();
}

$todos.onchange = function (e) { // 체크박스 토글
  const id = +e.target.parentNode.id;
  todos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
  render();
}

$checkAllBox.onchange = function (e) { // Mark all as complete
  const check = e.target.checked;
  todos = todos.map(todo => ({ ...todo, completed: check }));
  render();
}

$clearCompleted.onclick = function (e) { // checked 전부 삭제
  todos = todos.filter(todo => todo.completed === false);
  render();
}