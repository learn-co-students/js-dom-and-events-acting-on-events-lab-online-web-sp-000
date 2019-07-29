function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()



let input = document.querySelector('input')

function retrieveEmployeeInformation() {
  return input.value
}

function addNewElementAsLi() {
  let empoyeeName = retrieveEmployeeInformation()
  let employeeList = document.querySelector('.employee-list')
  
  employeeList.insertAdjacentHTML('beforeend', `<li> ${empoyeeName}</li>`)
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')

  submit.addEventListener('click', function() {
    addNewElementAsLi()
    document.querySelector('input').value = ''
  })
}

function clearEmployeeListOnLinkClick() {
  let ul = document.querySelector('ul')
  let button = document.querySelector('a')

  button.addEventListener('click', function() {
    ul.innerHTML = ''
  })
}