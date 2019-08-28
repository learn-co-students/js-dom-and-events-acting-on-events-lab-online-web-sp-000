function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input[type=text]').value
}

function addNewElementAsLi() {
  let ul = document.querySelector('.employee-list');
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation().toString();
  ul.append(li);
}

function addNewLiOnClick() {
  const input = document.querySelector('input[type=submit]');

  input.addEventListener('click', function(e) {
    addNewElementAsLi();
    document.querySelector('input[type=text]').value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  const link = document.querySelector('a');

  link.addEventListener('click', function(e) {
    document.querySelector('.employee-list').innerHTML = '';
  });
}
