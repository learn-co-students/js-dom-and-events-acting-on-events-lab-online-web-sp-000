 // Create a ****form**** that adds Scuber employees.
 // It also allows us to clear the list of employees
 // upon a click to the "Clear Employee List" link.
 //also, we're adding a new employee to a list that were making on teh fly



function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()



//My Code _________________

let input = document.querySelector('input');

function retrieveEmployeeInformation(){
  return input.value
}
//This retrieves the employee information from the input.
//It returns a string equal to the value in the input.




function addNewElementAsLi() {
  let employeeInfo = retrieveEmployeeInformation();

  let ul = document.querySelector('.employee-list');
  let li = document.createElement('li');
  li.innerHTML = employeeInfo;

  ul.appendChild(li);
}

//calling appendChild on a node,
//look back at how to change a node into an array
//also look at when we used <li> directly in JS
//with wes bos
//***issue was, was passing   deets = li.innerHTML = employeeInfo; into appendchild as a variable
//curious why this didnt work thoguh

//takes value retrieved from the previous retrieveEmployeeInformation function
//and adds that string to a new list element
//which is appended to the ul with
//class "employee-list".






function addNewLiOnClick() {
  //let inputButton = document.querySelector('input[type="submit"]');
  // let clear = document.querySelector('input').value = '';
 let submitBox = document.querySelector('input[type="submit"]')

  submitBox.addEventListener('click', x => {
    addNewElementAsLi()
    document.querySelector('input').value = '';
  });
}
    //.then(event.value = "")
  //adds employee name as a li on click
      //eventListener('click', )
  //clears input value
//This adds the employee name as an li element
//on click and clears the input value.



function clearEmployeeListOnLinkClick() {

  let link = document.querySelector('a');
  let ul = document.querySelector('ul');

  link.addEventListener('click', e => {
    ul.innerHTML = ''
  })
}
  //w/o arrow function
  // function(event) {
  //    ul.innerHTML = '';
  //  })
  //when addNewLiOnClicked has finished running,
  //trigger this eventlistener

  //This empties out the employee list when "Clear employee list"
  //button clicked.
