function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation(){
  return document.querySelector('input').value;
};

function addNewElementAsLi(){
  return document.querySelector('.employee-list').append(retrieveEmployeeInformation())
};

function addNewLiOnClick(){
  const button = document.querySelector('input[type=submit]')
  button.addEventListener('click', function(){
    addNewElementAsLi();
    document.querySelector('input').value = ""
  })
};

function clearEmployeeListOnLinkClick(){
  const link = document.querySelector('a');
  const list = document.querySelector('.employee-list');
  link.addEventListener('click', function(){
    list.innerHTML = "";
  })
}