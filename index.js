function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    });
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation(){
  return document.querySelector('input').value;
  // There are two "input"s in the html file. With no specificity, this refers to the first one.
}


function addNewElementAsLi() {
  let employeeName = retrieveEmployeeInformation();
  let ul = document.querySelector('.employee-list');
  for (let i = 0; i < 1; i++) {
    let li = document.createElement('li');
    li.innerHTML = (i + 1).toString()+employeeName;
    ul.appendChild(li);
  }
}


function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', function(event) {addNewElementAsLi();
  document.querySelector('input').value=''
  })
}


function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a');
  let ul = document.querySelector('ul');
  link.addEventListener('click', function(event) {
    ul.innerHTML = ''
  })
}