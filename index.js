function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}
preventRefreshOnSubmit()

const getInput = document.getElementById("get-this")
const getUl = document.querySelector(".employee-list")

function retrieveEmployeeInformation(){
  return getInput.value
}

function addNewElementAsLi(){
  let nameValue = retrieveEmployeeInformation()
  const newLi = document.createElement("li")
  newLi.innerText = nameValue
  getUl.appendChild(newLi)
}

function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]')
    submit.addEventListener('click', function(event){
      addNewElementAsLi()
      resetInputValue()
    })
  }

function resetInputValue(){
  document.querySelector('input').value = ''
}

function clearEmployeeListOnLinkClick(){
  const getATag = document.querySelector("a")
  getATag.addEventListener("click", function(){
    getUl.innerHTML = ""
  })
}
