const queryS = selector => document.querySelector(selector)

const $input = queryS('[data-js="task-input"]'); // Task Input
const $btn   = queryS('[data-js="btn"]'); // Add Button
const $list  = queryS('[data-js="task-list"]'); // Task List

$btn.addEventListener('click', createElement)

$input.addEventListener('keypress', (e) => {
  if (13 === e.keyCode) {
    createElement();
  }
})

$list.addEventListener('click', (e) => {
  const element = e.target

  if ('removeBtn' !== element.getAttribute('data-js')) return

  element.parentNode.remove()
})

function createElement() {
  const task = $input.value

  const markUp = `
    <li class="tasks__item">
      <label>
        <input type="checkbox">
          <p class="task__p">${task}</p>
        <button class="btn btn--remove" data-js="removeBtn" type="button">X</button>
      </label>
    </li>
  `

  $list.insertAdjacentHTML('beforeend', markUp)

  $input.value = ''
}
