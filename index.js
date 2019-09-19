function preventRefreshOnSubmit() {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  });
}

preventRefreshOnSubmit();

function retrieveEmployeeInformation() {
  const inputs = $("input");
  return inputs[0].value;
}

function addNewElementAsLi() {
  const list = $(".employee-list");
  list.append(`<li>${retrieveEmployeeInformation()}</li>`);
}

function addNewLiOnClick() {
  const inputs = $("input");
  inputs[1].addEventListener("click", addNewElementAsLi);
  inputs[1].addEventListener("click", function(e) {
    inputs[0].value = "";
  });
}

function clearEmployeeListOnLinkClick() {
  const list = $(".employee-list");
  const link = $('a[href="#"]')[0];
  
  link.addEventListener('click', function(e){
    list.empty();
  });
}