function preventRefreshOnSubmit() {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  });
}

preventRefreshOnSubmit();

function retrieveEmployeeInformation() {
  return document.querySelector("input[name]").value;
}

function addNewElementAsLi() {
  let employeeName = retrieveEmployeeInformation();
  return document.querySelector("ul.employee-list").append(`${employeeName}`);
}

function addNewLiOnClick() {
  document
    .querySelector('input[type="submit"]')
    .addEventListener("click", function(event) {
      addNewElementAsLi();
      resetInput();
    });
}
function resetInput() {
  document.querySelector("input").value = "";
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector("a");
  let ul = document.querySelector("ul");
  link.addEventListener("click", function(event) {
    ul.innerHTML = "";
  });
}