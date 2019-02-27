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
  let str = retrieveEmployeeInformation();
  let element = document.createElement('li');
  element.textContent = str;
  let parent = document.querySelector('ul.employee-list');
  parent.appendChild(element);
}

function addNewLiOnClick() {
  addNewElementAsLi();
  document.querySelector('input').value = "";
}

function clearEmployeeListOnLinkClick() {
  let li = document.querySelectorAll('li')
  let button = document.querySelector('a')
  button.addEventListener('click', function() {
    for (let i = 0; i < li.length; ++i) {
      li[i].remove();
    }
  })
}