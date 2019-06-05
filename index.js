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
  let element = retrieveEmployeeInformation()
  $('.employee-list').append(`<li>${element}</li>`);
}

function addNewLiOnClick() {
  let input = document.querySelector('input')
  let submit = document.querySelector('input[type="submit"]')

  submit.addEventListener('click', function(event) {
    addNewElementAsLi();
    input.value = "";
  });
}

function clearEmployeeListOnLinkClick() {
  let ul = document.querySelector('ul')
  let button = document.querySelector('a')

  button.addEventListener('click', function(event) {
    ul.innerHTML = "";
  });
}
