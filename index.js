function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    });
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation(){
  return document.querySelector('input').value;
  
}


function addNewElementAsLi() {
  let employeeName = retrieveEmployeeInformation();
  let ul = document.querySelector('.employee-list');
  
    let li = document.createElement('li');
    li.innerHTML = employeeName;
    ul.append(li);
    // ul.appendChild(li);
}


function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', (event) => {addNewElementAsLi();
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