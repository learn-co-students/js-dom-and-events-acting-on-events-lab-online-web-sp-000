function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let element = document.createElement('li')
  element.innerHTML = retrieveEmployeeInformation()
  let ul = document.querySelector('.employee-list')
  ul.append(element)
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener('click', function() {
    addNewElementAsLi()
    document.querySelector('input').value = ''
  })
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function() {
    let ul = document.querySelector('.employee-list')
    while(ul.childElementCount > 0) {
      ul.removeChild(ul.querySelector('li:first-child'))
    }
    ul.innerHTML = ''
  })
}


preventRefreshOnSubmit()
