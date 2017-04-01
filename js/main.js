(function() {
  'use strict';

  var $input = document.querySelector('[data-js="inputItem"]');
  var $addButton = document.querySelector('[data-js="addButton"]');
  var $list = document.querySelector('[data-js="itemList"]');


  $addButton.addEventListener('click', function() {
    createElement();
  })

  function createElement() {
    var $listItem = document.createElement('li')
    $listItem.setAttribute('data-js', 'listItem')

    var $label = document.createElement('label')

    var $check = document.createElement('input')
    $check.setAttribute('type', 'checkbox')

    var $removeButton = document.createElement('button')
    var $removeContent = document.createTextNode('x')
    $removeButton.setAttribute('data-js', 'removeButton')
    $removeButton.appendChild($removeContent)

    var $inputValue = $input.value;
    var $inputContent = document.createTextNode($inputValue);

    $list.appendChild($listItem)
    $listItem.appendChild($check)
    $listItem.appendChild($label)
    $label.appendChild($inputContent)
    $listItem.appendChild($removeButton)


    $removeButton.addEventListener('click', removeElement)
    $input.value = '';


  };

  function removeElement() {
    $list.removeChild(document.querySelector('[data-js="listItem"]'));
  };

})();
