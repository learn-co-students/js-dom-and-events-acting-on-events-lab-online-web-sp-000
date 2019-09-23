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
  let employee_list = document.querySelector('ul.employee-list')
  let li = document.createElement('li')
  li.innerHTML = retrieveEmployeeInformation()
  employee_list.appendChild(li)
}

function addNewLiOnClick() {
  let button = document.querySelector('input[type="submit"]')
  let text_field = document.querySelector('input[type="text"]')
  button.addEventListener('click', function(event) {
    addNewElementAsLi()
    text_field.value = ''
  })
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a')
  link.addEventListener('click', function(event) {
    let employee_list = document.querySelector('ul.employee-list')
    employee_list.innerHTML = ''
  })
}