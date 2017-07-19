const queryS = (selector) => document.querySelector(selector)

const $input = queryS('[data-js="task-input"]'); // Task Input
const $btn = queryS('[data-js="btn"]'); // Add Button
const $list = queryS('[data-js="task-list"]'); // Task List

$btn.addEventListener('click', createElement)

$input.addEventListener('keypress', function(e) {
    if (e.keyCode == 13) {
      createElement();
    }
})

function createElement() {
  const task = $input.value
  const markUp = `
    <li class="tasks__item">
      <label>
        <input type="checkbox">
          <p class="task__p"> ${task} </p>
        <button class="btn btn--remove" data-js="removeBtn" type="button"> X </button>
      </label>
    </li>
  `
  $list.insertAdjacentHTML('beforeend', markUp)

  $input.value = ''


  // Looping through all remove Button and listening to click event.

  const removeBtn = Array.from(document.querySelectorAll('[data-js="removeBtn"]'))
  removeBtn.forEach(function(removeBtn) {
      removeBtn.addEventListener('click', function() {
        removeBtn.parentNode.remove()
    })
  });

}
