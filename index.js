function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}


function addNewElementAsLi() {
  let theUl = document.querySelector(".employee-list")
  let el = retrieveEmployeeInformation();
  theUl.append(el);
}

function addNewLiOnClick() {
  let theUl = document.querySelector(".employee-list")
  let el = retrieveEmployeeInformation();
  document.querySelector('form').addEventListener('click', function(event){
    addNewElementAsLi()
    document.querySelector('input').value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(event){
    theUl = document.querySelector(".employee-list")
    theUl.innerHTML = ''
  });
}
