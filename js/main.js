

  var $input = document.querySelector('[data-js="inputItem"]'); // Input para colocar a tarefa
  var $addButton = document.querySelector('[data-js="addButton"]'); // Botão de adicionar
  var $list = document.querySelector('[data-js="todoList"]'); // Lista ToDO


  $addButton.addEventListener('click', function() {
    createElement();
  })
  $input.addEventListener('keypress', function(e) {
      if (e.keyCode == 13) {
        createElement();
      }
  })

  function createElement() {
    var $listItem = document.createElement('li') // Criando elemento
    $listItem.setAttribute('data-js', 'listItem') //Setando atributo data-js

    var $label = document.createElement('label') // Criando label (para o valor)

    var $check = document.createElement('input') // Criando input (checkbox)
    $check.setAttribute('type', 'checkbox')

    var $removeButton = document.createElement('button') // criando botão
    var $removeContent = document.createTextNode('x') // criando nó de texto
    $removeButton.setAttribute('data-js', 'removeButton') // atributo p botão delete
    $removeButton.appendChild($removeContent) // colocando o x no botão

    var $inputValue = $input.value; // pegando valor do input
    var $inputContent = document.createTextNode($inputValue); // criando nó de texto c esse valor

    $list.appendChild($listItem)
    $listItem.appendChild($check)
    $listItem.appendChild($label)
    $label.appendChild($inputContent)
    $listItem.appendChild($removeButton)


    $removeButton.addEventListener('click', removeElement)
    $input.value = '';


  };

  function removeElement() {
    $list.removeChild(this.parentNode);
  };
