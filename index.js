function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  let input = $('input')
  return input[0].value
}

function addNewElementAsLi() {
  let name = retrieveEmployeeInformation()
  let li = document.createElement('li')

  li.append(name)
  return $('ul.employee-list').append(li)
}

function addNewLiOnClick() {
  let button = $('input[type="submit"]')[0]
  button.addEventListener('click', function(event){
    addNewElementAsLi()
    $('input[type="text"]')[0].value = ""
  })
}

function clearEmployeeListOnLinkClick() {
  let clearLink = $('a')[0]
  let employees = $('ul.employee-list')
  clearLink.addEventListener('click', function(event){
  employees.empty();
});
}
