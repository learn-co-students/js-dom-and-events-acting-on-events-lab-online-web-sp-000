function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  let element = document.createTextNode(retrieveEmployeeInformation());
  let list = document.createElement('li')
  list.appendChild(element);
  document.querySelector('.employee-list').appendChild(list);
}

function addNewLiOnClick() {
    document.querySelector('input[type=submit]').addEventListener('click', function() {
      addNewElementAsLi();
      document.querySelector('input').value = "";
    });
  }

function clearEmployeeListOnLinkClick(){
  let ul = document.querySelector('ul')
  document.querySelector('a').addEventListener('click', function(event){
    ul.innerHTML = ''
  })
}