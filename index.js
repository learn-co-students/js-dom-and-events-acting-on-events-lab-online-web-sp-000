function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation() {
    return document.querySelector("input").value;
}


function addNewElementAsLi() {

  let employeeName = retrieveEmployeeInformation();
  let ul = document.querySelector('.employee-list');
  for (let i = 0; i < 1; i++) {
  let li = document.createElement('li');
  li.innerHTML = employeeName;
  ul.appendChild(li);
}

}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', function(e) {
    addNewElementAsLi();
    document.querySelector('input').value=''
  })
}

function clearEmployeeListOnLinkClick() {
  document.querySelector("a").addEventListener("click", function(e) {
  document.querySelector(".employee-list").innerHTML = "";
  })
}

preventRefreshOnSubmit()
