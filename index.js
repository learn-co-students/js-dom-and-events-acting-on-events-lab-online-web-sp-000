function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  let input = document.querySelector("input")
  return input.value;
}

function addNewElementAsLi() {
  document.querySelector(".employee-list").insertAdjacentHTML("beforeend", `<li>${retrieveEmployeeInformation()}</li>`)
}

function addNewLiOnClick() {
  let submit = document.querySelector("input[type='submit']");
  submit.addEventListener("click", function(event) {
    addNewElementAsLi();
    emptyValue();
  })
}

function emptyValue() {
  document.querySelector("input").value = ""
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector("a");
  let ul = document.querySelector(".employee-list");
  link.addEventListener("click", function(event) {
    ul.innerHTML = "";
  });
}
