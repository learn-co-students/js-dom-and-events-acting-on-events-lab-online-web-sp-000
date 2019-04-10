function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function clearForm(){
  document.querySelectorAll('form input')[0].value = '';
}

function retrieveEmployeeInformation(){
  const input = $('form input:first')[0];
  return input.value;
}

function addNewElementAsLi(){
  const name = retrieveEmployeeInformation();
  const ul = $('ul.employee-list')[0];
  const li = document.createElement('li')
  li.innerHTML = name;
  ul.appendChild(li);

}

function addNewLiOnClick(e){
  const submit = $('form input:last')[0];
  submit.addEventListener('click', e => {
    addNewElementAsLi();
    clearForm();
  })
}


function clearEmployeeListOnLinkClick(){
  const clearButton = $('a')[0];
  clearButton.addEventListener('click', e => {
    e.preventDefault();
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
  });

}
