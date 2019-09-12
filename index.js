function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation() {
  let input = document.querySelector('input').value
  return input
}

function addNewElementAsLi() {
  let name = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${name}</li>`)
}

function addNewLiOnClick() {
let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function () {
    addNewElementAsLi()
    document.querySelector('input').value = ""
  })
}

function clearEmployeeListOnLinkClick () {
  link = document.querySelector('a')
  e = document.querySelector('.employee-list')
  link.addEventListener('click', function () {
      e.innerHTML = ''
    })
}

preventRefreshOnSubmit()
