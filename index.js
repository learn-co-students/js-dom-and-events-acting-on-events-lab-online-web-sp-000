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
  let employee = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employee}</li>`)
}

function addNewLiOnClick() {
  // let employeeName = addNewElementAsLi()
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function(event){
  addNewElementAsLi()
  input.value = ""
  })


}
function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function(event){
     ul.innerHTML = ""
  })
}
