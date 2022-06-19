const form = document.querySelector('.todo-form');
const textInput = document.querySelector('#todo-input');

const list = document.querySelector('.todo-list');

let text = '';

function createEl(t) {
  const li = document.createElement('li');
  li.textContent = t;
  list.appendChild(li);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  text = textInput.value;

  if (text === '') return;

  createEl(text);

  text = '';
  textInput.value = '';
});

