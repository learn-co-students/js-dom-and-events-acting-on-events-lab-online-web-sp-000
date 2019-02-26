function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const retrieveEmployeeInformation = () => document.querySelector("input").value

const addNewElementAsLi = () =>         document.querySelector(".employee-list").appendChild(document.createElement('li')).innerHTML += document.querySelector("input").value

const addNewLiOnClick = () => document.querySelector('input[type="submit"]').addEventListener("click", () => {
  document.querySelector(".employee-list").appendChild(document.createElement('li')).innerHTML += document.querySelector("input").value
  document.querySelector("input").value = ""
})

const clearEmployeeListOnLinkClick = () => document.querySelector("a").addEventListener("click", () => {
  document.querySelector(".employee-list").innerHTML = "";
})
