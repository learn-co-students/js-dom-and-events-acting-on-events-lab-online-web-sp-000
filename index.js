function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

const retrieveEmployeeInformation = () =>{
  return document.querySelector('input[type="text"]').value
}

const addNewElementAsLi = () => {
    const newLi = document.createElement('li')
    newLi.innerText = retrieveEmployeeInformation()
    document.querySelector('.employee-list').appendChild(newLi)
}

const addNewLiOnClick = () =>{
    addNewElementAsLi(event)
    document.querySelector('input[type="text"]').value = ''
}

const clearEmployeeListOnLinkClick = (event) =>{
  if(event){
    const employeeList = document.querySelector('.employee-list')
    // while(employeeList.children[0]){
    //   employeeList.removeChild(employeeList.children[0])
    // }
    employeeList.innerHTML = ''
  }
}


document.querySelector('a').addEventListener('click', clearEmployeeListOnLinkClick)

preventRefreshOnSubmit()
   