function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector("input").value;
}

function addNewElementAsLi() {
  const li = document.createElement('li')
  li.innerHTML = retrieveEmployeeInformation();
  document.querySelector(".employee-list").appendChild(li);
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener('click', e => {
    addNewElementAsLi();
    document.querySelector("input").value = "";
  });
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', e => {
    document.querySelector('ul').innerHTML = '';
  });
}
