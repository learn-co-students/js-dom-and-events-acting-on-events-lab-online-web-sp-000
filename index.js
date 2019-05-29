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
  $('ul.employee-list').append("<li>Bob</li>");
}

function addNewLiOnClick() {
  let input = document.querySelector('input');
  let submit = document.querySelector('input[type="submit"]');

  submit.addEventListener('click', function(e) {
    $('ul.employee-list').append("<li>Fred</li>");
  })
  input.value = "";
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a');
  let list = document.querySelector('.employee-list');
  let employees = document.querySelector('ul.employee-list li');

  link.addEventListener('click', function(e) {
    list.innerHTML = ""
    }
  );
}
