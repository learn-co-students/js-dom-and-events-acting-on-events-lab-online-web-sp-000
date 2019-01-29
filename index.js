function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return $(':text').val();
};

function addNewElementAsLi() {
  let employee = retrieveEmployeeInformation();
  return $('.employee-list').append(`<li>${employee}</li>`);
};

function addNewLiOnClick() {
  $(':submit').click(function() {
    addNewElementAsLi();
    return $(':text').val("");
  });
};

function clearEmployeeListOnLinkClick() {
  $('a').click(function () {
    return $('.employee-list').empty();
  })
};