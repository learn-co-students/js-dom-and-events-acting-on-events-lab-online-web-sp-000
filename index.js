function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const employeeList = document.querySelector('.employee-list');
let nameField = document.querySelector("input[type='text']");
const button = document.querySelector("input[type='submit']");
const link = document.querySelector('a');

function retrieveEmployeeInformation() {
  return nameField.value;
}

function addNewElementAsLi() {
  let newLi = document.createElement('li');
  newLi.innerHTML = retrieveEmployeeInformation();
  employeeList.appendChild(newLi);
}

function addNewLiOnClick() {
  button.addEventListener('click', (e) => {
    addNewElementAsLi();
    nameField.value = "";
  })
}

function clearEmployeeListOnLinkClick() {
  link.addEventListener('click', (e) => {
    employeeList.innerHTML = "";
  })
}
