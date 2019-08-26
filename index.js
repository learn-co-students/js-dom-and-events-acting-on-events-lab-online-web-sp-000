function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation(){
  return $('input').val()
}

function addNewElementAsLi(){
  const newItem = retrieveEmployeeInformation()
  $('.employee-list').append("<li>" +newItem + "</li")
}

function addNewLiOnClick(){
  $('input:submit').click(function(){
    addNewElementAsLi();
    $('input:text').attr("value", "");
});
}

function clearEmployeeListOnLinkClick(){
  $('a').click(function(){
    $('ul').empty()
  })
}

//let submit = document.querySelector('input[type//="submit"]')
//submit.addEventListener("click", addNewLiOnClick); 
preventRefreshOnSubmit()
