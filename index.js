function preventRefreshOnSubmit(){
  document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault()
  })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return $("input").val();
}

function addNewElementAsLi() {
  const newLi = document.createElement('li');
  newLi.innerHTML = retrieveEmployeeInformation();
  $("ul.employee-list").append(newLi);
}

function addNewLiOnClick() {
  addNewElementAsLi();
  $("input").val("");
}

function clearEmployeeListOnLinkClick() {
  $("a").click( function(e) {
    $("ul.employee-list").empty();
  });
}

// clearEmployeeListOnLinkClick(): This empties out the employee list when "Clear employee list" button clicked.
