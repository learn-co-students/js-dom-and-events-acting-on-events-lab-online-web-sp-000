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
  const ul = document.querySelector('ul.employee-list');

  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();

  ul.appendChild(li);
}

function addNewLiOnClick(){
  let submitButton = document.querySelector('input[type="submit"]');

  submitButton.addEventListener('click', function(event){
    addNewElementAsLi();
    document.querySelector('input').value = "";
  })
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a');

  link.addEventListener('click', function(event){
    let ul = document.querySelector('ul.employee-list');
    while (ul.children.length != 0){
      ul.removeChild(ul.children[0]);
    }
    ul.innerHTML = "";
  })
}