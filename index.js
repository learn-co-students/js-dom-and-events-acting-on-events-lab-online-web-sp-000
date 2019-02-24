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
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  let ul = document.querySelector('ul.employee-list');
  ul.appendChild(li);
}

function addNewLiOnClick() {
  let addButton = document.querySelector('main form input[type="submit"]');
  addNewElementAsLi();
  const eventListener = function(event) {
      addNewElementAsLi();
      document.querySelector('input').value = "";
  };
  addButton.addEventListener('click', eventListener);
}


function clearEmployeeListOnLinkClick() {
  let clearButton = document.querySelector('main a');
  clearButton.addEventListener('click', function(event) {
    let ul = document.querySelector('ul.employee-list');
    ul.innerHTML = "";
  });
}
