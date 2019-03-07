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
  const ul = document.querySelector('.employee-list')
  let li = document.createElement('li');
  li.innerHTML =  retrieveEmployeeInformation();
  ul.appendChild(li);
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
    submit.addEventListener('click', function(event){
      addNewElementAsLi()
      input.value = ''
    })
}

function clearEmployeeListOnLinkClick() {
  let clear = document.querySelector('a');
  const ul = document.querySelector('.employee-list');
  clear.addEventListener('click', function(e) {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
  }})
  }
