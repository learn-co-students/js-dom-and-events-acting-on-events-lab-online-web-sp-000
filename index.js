function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

//This retrieves the employee information from the input. 
//It returns a string equal to the value in the input.
function retrieveEmployeeInformation() {
  return document.querySelector("input").value;
}

//This function takes the value retrieved from the previous retrieveEmployeeInformation function and 
//adds that string to a new list element which is appended to the ul with class "employee-list".
function addNewElementAsLi() {
  const employeeInformation = retrieveEmployeeInformation();
  const li = document.createElement("li");                        // Create a <p> node
  const ul = document.querySelector(".employee-list");
  li.appendChild(document.createTextNode(employeeInformation));
  ul.appendChild(li);
  document.querySelector("input").value = "";
} 

//This adds the employee name as an li element on click and clears the input value.
function addNewLiOnClick() {
  const submit = document.querySelector("input[type='submit']");
  submit.removeEventListener("click", addNewElementAsLi);
  submit.addEventListener("click", addNewElementAsLi);
}

//This empties out the employee list when "Clear employee list" button clicked.
function clearEmployeeListOnLinkClick() {
  document.querySelector("a").addEventListener("click", function(event) {
    document.querySelector(".employee-list").innerHTML = "";
  });
}

preventRefreshOnSubmit()
