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

const hideMismatchingTodos =  (array, todoContent) => {
  array
  .filter(todo => !todo.textContent.toLowerCase().includes(todoContent))
  .forEach(todo => {
    todo.classList.add('is-hidden')
  })
}
const showMatchingTodos = (array, todoContent) => {
  array
  .filter(todo => todo.textContent.toLowerCase().includes(todoContent))
  .forEach(todo => {
    todo.classList.remove('is-hidden')
  })
}

const handleTodoSearches = event => {
  const inputValue = event.target.value.trim().toLowerCase()
  const todosArray = Array.from(todosContainer.children)

  hideMismatchingTodos(todosArray, inputValue)
  showMatchingTodos(todosArray, inputValue)
}

formAddTodo.addEventListener('submit', handleAddTodo)
todosContainer.addEventListener('click', handleTodoDeletion)
formSearchTodo.addEventListener('input', handleTodoSearches)