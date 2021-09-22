const searchTodoItemForm = document.querySelector('#search-todo')
const todoList = document.querySelector('#todo-list')
const addTodoForm = document.querySelector('#add-todo-form')
const test = Array.from(document.querySelectorAll('li'))

const createTodoHTML = message => `
<li class="notification mb-1 p-3 is-warning">
  <div class="item-text">
    <div>${message}</div>
    <div>
      <button class="delete is-warning"></button>
    </div>
  </div>
</li>
`

addTodoForm.addEventListener('submit', event => {
  event.preventDefault()
  
  const newTodoString = event.target.addTodo.value
  const newTodo = createTodoHTML(newTodoString)
  newTodo.trim()

  if (newTodo) {
    todoList.innerHTML += newTodo
  }

  event.target.reset()
})

todoList.addEventListener('click', event => {
  const clickedElementClass = event.target.classList[0]

  if (clickedElementClass === 'delete') {
    event.target.parentElement.parentElement.parentElement.remove()
  }
})

searchTodoItemForm.addEventListener('keyup', event => {
  const todoItems = Array.from(document.querySelectorAll('li'))
  const inputValue = event.target.value

  if (todoItems.some(item => item.textContent.includes(inputValue))) {
    console.log(item);
  }
})
