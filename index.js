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
  let item = retrieveEmployeeInformation();
  return document.querySelector('.employee-list').append(item);
}

function addNewLiOnClick() {
  document.body.addEventListener('click', function(event){
    addNewElementAsLi();
    document.querySelector('input').value = '';
  })
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(event){
    document.querySelector('ul').innerHTML = '';
  })
}
