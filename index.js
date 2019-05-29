function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation(){
  return document.querySelector('input').value;
}

function addNewElementAsLi(){
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  let ul = document.querySelector('.employee-list')

   return ul.appendChild(li);
  // return x.appendChild()
}

function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]')
   submit.addEventListener('click', function() {
   addNewElementAsLi()
   document.querySelector('input').value = "";
 });

  // var li = "<li>" + retrieveEmployeeInformation() + "</li>";
  //  li.addEventListener('click', function() {
  //   li.value = "";
  // });
}

function clearEmployeeListOnLinkClick(){
  let employeelist = document.querySelector('.employee-list')
  link = document.querySelector('a')

  // const main = document.getElementById('main');

 link.addEventListener('click', function() {
  employeelist.innerHTML = "";
});

}
