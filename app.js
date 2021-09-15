
const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')

const generateTodo = message => `
<li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${message}</span>
  <i class="far fa-trash-alt delete"></i>
</li>
`

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()
  if (inputValue.length) {
    todosContainer.innerHTML += generateTodo(event.target.add.value)

    event.target.reset()
  }
})