function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let inputField = document.querySelector('input')

const retrieveEmployeeInformation = () => {
return inputField.value
};


const addNewElementAsLi = () => {
  let employeeName = retrieveEmployeeInformation();
  let list = document.querySelector('.employee-list');
  const li = document.createElement('li');
  li.innerText = `${employeeName}`

  list.append(li)
};

const addNewLiOnClick = () => {
//need to do querySelector then the event listener 
  let submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', () => {
    addNewElementAsLi()
    resetInputField()
  })
}

const clearEmployeeListOnLinkClick = () => {
  let link = document.querySelector('a');
  let ul = document.querySelector('ul');
  link.addEventListener('click', () => {
    ul.innerText = ''
  })
}

const resetInputField = () => {
  let clear = document.querySelector('input');
  clear.value = ''
}