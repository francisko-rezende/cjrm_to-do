const formAddTodo = document.querySelector('#form-add-todo')
const formSearch = document.querySelector('.form-search')
const todosContainer = document.querySelector('#todos-container')


const createTodoHTML = content => `
  <li class="message has-background-warning has-text-dark my-1 p-3 is-flex is-justify-content-space-between is-align-items-center">
    <span>${content}</span><i class="fas fa-trash-alt is-clickable"></i>
  </li>
`


formAddTodo.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()

  if (inputValue.length) {
    todosContainer.innerHTML += createTodoHTML(inputValue)
  }

  event.target.reset()
})

todosContainer.addEventListener('click', event => {
  const clickedElement = event.target
  const isClickedElementDeleteButton = Array.from(event.target.classList)
  .includes('fa-trash-alt')

  if (isClickedElementDeleteButton) {
    clickedElement.parentElement.remove()
  }
})

formSearch.addEventListener('submit', event => {
  event.preventDefault()
  event.target.reset()
})

formSearch.search.addEventListener('input', event => {
  const inputValue = event.target.value
  const lis = Array.from(todosContainer.children)

  lis.forEach(li => {
    if (!li.querySelector('span').textContent.includes(inputValue)) {
      li.setAttribute('class', 'is-hidden')
      return
    }
    li.setAttribute('class', 'message has-background-warning has-text-dark my-1 p-3 is-flex is-justify-content-space-between is-align-content-center')
  })
})