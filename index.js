function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()

    })
}

let input = document.querySelector('input')

function retrieveEmployeeInformation() {
  return input.value
}

function addNewElementAsLi() {
  //retrieve value from previous function
  //adds the value of string to new list element
  //createElement('li')
  //append li to list
  let empoyeeName = retrieveEmployeeInformation()
  let employeeList = document.querySelector('.employee-list')
  employeeList.insertAdjacentHTML('beforeend', `<li> ${empoyeeName}</li>`)
  // console.log('retrieve' retrieveEmployeeInformation);
}

function addNewLiOnClick() {
  //add employee name as li
  //with addEventListener on click
  //clear input value
  let submit = document.querySelector('#submit')
  submit.addEventListener('click', function(event){
    addNewElementAsLi()
    document.querySelector('input').value = '';
  })
}

function clearEmployeeListOnLinkClick() {
  //empty out the employee list by all
  //as button
  //remove li element
  let ul = document.querySelector('ul')
  let button = document.querySelector('a')
  button.addEventListener('click', function (event) {
    ul.innerHTML = ''
  })
}

preventRefreshOnSubmit()
