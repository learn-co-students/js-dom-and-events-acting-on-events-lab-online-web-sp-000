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
  let ul = document.querySelector(".employee-list")
  let el = retrieveEmployeeInformation();
  ul.append(el);
}


function addNewLiOnClick() {
  let Ul = document.querySelector(".employee-list")
  let el = retrieveEmployeeInformation();
  document.querySelector('form').addEventListener('click', function(event){
    addNewElementAsLi()
    document.querySelector('input').value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(event){
    ul = document.querySelector(".employee-list")
    ul.innerHTML = ''
  });
}
