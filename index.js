function retrieveEmployeeInformation() {
  // console.log('retrieveEmployeeInformation');

  return $("input:first")[0].value.trim();
}

function addNewElementAsLi() {
  // console.log('addNewElementAsLi');

  let li = document.createElement("li");
  li.innerHTML = retrieveEmployeeInformation();
  $("ul.employee-list")[0].append(li);
}

function addNewLiOnClick() {
  // console.log('addNewLiOnClick');

  $("input[type=submit")[0].addEventListener("click", () => {
    addNewElementAsLi();
    $("input:first")[0].value = "";
  });
}

function preventRefreshOnSubmit() {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  });
}

function clearEmployeeListOnLinkClick() {
  console.log("clearEmployeeListOnLinkClick");

  $("a")[0].addEventListener("click", () => {
    let kids = $("ul.employee-list")[0].children;
    while (kids.length > 0) {
      kids[0].remove();
    }
    $('ul.employee-list').innerHTML = ''
  });
}

preventRefreshOnSubmit();
