function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  let input = document.querySelector('input')
  return input.value
}

function addNewElementAsLi() {
  let employeeListEl = document.querySelector('.employee-list')
  let employeeInfo = retrieveEmployeeInformation()
  employeeListEl.append(employeeInfo)
}

function addNewLiOnClick() {
  retrieveEmployeeInformation()
  addNewElementAsLi()
  let input = document.querySelector('input')
  input.value = ''
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function(e) {
    ul.innerHTML = ''
  })
}