const formAddTodo = document.querySelector('#form-add-todo')
const todosContainer = document.querySelector('#todos-container')

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()

  todosContainer.innerHTML += `
    <li class="message has-background-warning has-text-dark my-1 p-3 is-flex is-justify-content-space-between is-align-items-center">
      <span>${event.target.add.value}</span><i class="fas fa-trash-alt is-clickable"></i>
    </li>
  `
  event.target.reset()
})