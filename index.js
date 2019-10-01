function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()



function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let list = document.querySelector('ul.employee-list');
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  
  list.appendChild(li);
}

function addNewLiOnClick() {
  let input = document.querySelector('input');
  let s = document.querySelector('input[type=submit]');
  
  s.addEventListener('click', function() {
    addNewElementAsLi();
    input.value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  let list = document.querySelector('ul.employee-list');
  let clearListButton = document.querySelector('a');
  
  clearListButton.addEventListener('click', function() {
    list.innerHTML = '';
  });
}