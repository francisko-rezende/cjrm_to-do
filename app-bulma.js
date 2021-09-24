const formAddTodo = document.querySelector('#form-add-todo')
const todosContainer = document.querySelector('#todos-container')
const formSearchTodo = document.querySelector('.form-search input')

const generateTodoHTML = todoContent => `
<li class="message has-background-warning has-text-dark my-1 p-3 is-flex is-justify-content-space-between is-align-items-center">
  <span>${todoContent}</span><i class="fas fa-trash-alt is-clickable"></i>
</li>
`

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()
  const inputValue = event.target.add.value

  todosContainer.innerHTML += generateTodoHTML(inputValue)
  event.target.reset()
})

todosContainer.addEventListener('click', event => {
  const clickedElement = event.target

  if (Array.from(clickedElement.classList).includes('fa-trash-alt')) {
    clickedElement.parentElement.remove()
  }
})

formSearchTodo.addEventListener('input', event => {
  const inputValue = event.target.value.trim().toLowerCase()

  Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.add('is-hidden')
    })

  Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('is-hidden')
    })

})