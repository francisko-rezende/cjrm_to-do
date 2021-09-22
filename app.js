
const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const formSearchTodo = document.querySelector('.form-search')

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

formSearchTodo.addEventListener('submit', event => {
  event.preventDefault()
})

formSearchTodo.search.addEventListener('input', event => {
  const lis = Array.from(todosContainer.children)
  const inputValue = event.target.value
  const hideLi = li => {
    li.setAttribute('class', 'd-none')
  }
  const resetLiClasses = li => {
    li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')
  }
  
  lis.forEach(li => {

    const isTodoPresent = li.querySelector('span').textContent.includes(inputValue)
    
    !isTodoPresent ? hideLi(li) : resetLiClasses(li)
  
  })
})

todosContainer.addEventListener('click', event => {
  const clickedElement = event.target
  const isClickedElementTrashIcon = Array.from(clickedElement.classList).includes('delete')

  if (isClickedElementTrashIcon) {
    clickedElement.parentElement.remove()
  }
})