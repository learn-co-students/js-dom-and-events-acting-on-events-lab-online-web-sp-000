function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  return document.querySelector('.employee-list').append(retrieveEmployeeInformation())
}

function addNewLiOnClick() {
  document.body.addEventListener('click', function(event){
    document.querySelector('.employee-list').append(retrieveEmployeeInformation())
    document.querySelector('input').value = '';
  })
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(event){
    document.querySelector('ul').innerHTML = '';
  })
}

preventRefreshOnSubmit()
