function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault(); 
    });
}

preventRefreshOnSubmit();


function retrieveEmployeeInformation(){
   let input = document.querySelector('input'); 
    return input.value;
}


function addNewElementAsLi(){ 
  let list = document.querySelector('.employee-list'); 
  let info = retrieveEmployeeInformation(); 
  list.append(info); 
}

function addNewLiOnClick(){
  retrieveEmployeeInformation(); 
  addNewElementAsLi(); 
  let input = document.querySelector('input');
  input.value = ''; 
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a');
  let ul = document.querySelector('ul');
  link.addEventListener('click', function(e) {
    ul.innerHTML = '';
  });
}