function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
 let input = document.querySelector('input').value;
 return input;
}

function addNewElementAsLi() {
  let li = document.createElement('li');
  let ul = document.querySelector('.employee-list');

  li.innerHTML = retrieveEmployeeInformation();
  ul.append(li);
}

function clearInputValue(){
 document.querySelector('input').value = '';
}

function addNewLiOnClick() {
  let action = document.querySelector('input[type="submit"]');

  action.addEventListener('click', function(e){
    addNewElementAsLi()
    clearInputValue()
  });
}

function clearEmployeeList(){
  let ul = document.querySelector('.employee-list');
  ul.innerHTML = '';
}

function clearEmployeeListOnLinkClick() {
  let action = document.querySelector('a');

  action.addEventListener('click', function(e){
    clearEmployeeList()
  });
}
