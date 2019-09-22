function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.getElementById("myForm").elements[0].value
  //   return input.value;
}

function addNewElementAsLi(){
  let x = retrieveEmployeeInformation();
  let ul = document.querySelector("ul");
  let li = document.createElement('li');

  li.innerHTML = x;

  ul.append(li);
  // creates "li" with input content
}

function addNewLiOnClick(){
//  document.body.addEventListener('click', addNewElementAsLi)

//  document.body.addEventListener('click',  function(){
//    document.getElementById("myForm").elements[0].value=""
//  });
let input = document.querySelector('input');

let submit = document.querySelector('input[type="submit"]');
submit.addEventListener('click', function(e) {
  addNewElementAsLi();
  input.value = '';
});
}


function clearEmployeeListOnLinkClick(){

  let link = document.getElementsByTagName("a");

  $(link).click(function() {
    $(".employee-list").empty();
  });

}
