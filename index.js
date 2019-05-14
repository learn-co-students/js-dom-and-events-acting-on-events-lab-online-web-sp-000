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
  const employeeName = retrieveEmployeeInformation();
  const ul = document.querySelector(".employee-list");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(employeeName));
  ul.appendChild(li);
  document.querySelector("input").value = "";
}

function addNewLiOnClick() {
  const submit = document.querySelector("input[type='submit']");
  submit.removeEventListener("click", addNewElementAsLi);
  submit.addEventListener("click", addNewElementAsLi);
}

function clearEmployeeListOnLinkClick() {
  document.querySelector("a").addEventListener("click", function(event) {
    document.querySelector(".employee-list").innerHTML = "";
  })
}