const formAddTodo = document.querySelector('#form-add-todo')
const todosContainer = document.querySelector('#todos-container')
const formSearchTodo = document.querySelector('.form-search input')

const generateTodoHTML = todoContent => `
  <li data-todo-content="${todoContent}" class="message has-background-warning has-text-dark my-1 p-3 is-flex is-justify-content-space-between is-align-items-center">
    <span>${todoContent}</span>
    <i class="fas fa-trash-alt is-clickable delete-item" data-todo-content="${todoContent}"></i>
  </li>`


const handleAddTodo = event => {
  event.preventDefault()
  const inputValue = event.target.add.value.trim()
  const isThereAnInput = inputValue.length
  
  if (isThereAnInput) {
    todosContainer.innerHTML += generateTodoHTML(inputValue)
  }
  event.target.reset()
}

const removeLi = clickedElement => {
  document
  .querySelector(`[data-todo-content="${clickedElement.dataset.todoContent}"]`)
  .remove()
}

const handleTodoDeletion = event => {
  const clickedElement = event.target
  const isClickedElementTrashIcon = Array.from(clickedElement.classList)
    .includes('delete-item')
  
  if (isClickedElementTrashIcon) {
    removeLi(clickedElement)
  }
}

const showOrHideTodo = ({ todo, shouldBeVisible }) => {
  shouldBeVisible 
    ? todo.classList.remove('is-hidden') 
    : todo.classList.add('is-hidden')
}

const handleTodoSearches = event => {
  const inputValue = event.target.value.trim().toLowerCase()
  const todos = Array
    .from(todosContainer.children)
    .map(todo => ({
        todo, 
        shouldBeVisible: todo.textContent.toLowerCase().includes(inputValue)
      }))
  
  todos.forEach(showOrHideTodo)
}

formAddTodo.addEventListener('submit', handleAddTodo)
todosContainer.addEventListener('click', handleTodoDeletion)
formSearchTodo.addEventListener('input', handleTodoSearches)