let textInput = document.getElementById('input');
let AddButton = document.getElementById('button');
let getUl = document.getElementById('todolist');
let listOfTodos = [];

AddButton.addEventListener('click', function () {
  let TextReadByInputStored = textInput.value;
  listOfTodos.push(TextReadByInputStored);
  Display()
});

function Display() {
  getUl.innerHTML = '';
  listOfTodos.forEach(function (element, index) {
    getUl.innerHTML += `
      <li class="eachTodo">
      <span>${element}</span>
        <span>
            <span class='remove' onclick="removeFunction(${index})">ｘ</span>
                /
            <span class="edit" onclick="editFunction(${index})">Edit</span>
            </span>
        </li>
      `;
  });
}
function removeFunction(todoIndex) {
  listOfTodos.splice(todoIndex, 1);
  Display();
}

function editFunction(todoIndex) {
  let editedTextFromPrompt = prompt('Enter the Text you want to add :');
  listOfTodos[todoIndex] = editedTextFromPrompt;

  Display();
}