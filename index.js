function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation() {
  return $(':text').val();
}

function addNewElementAsLi() {
  $('ul').append(`<li>${retrieveEmployeeInformation()}</li>`);
}

function addNewLiOnClick() {
  let button = $(':submit:first')[0];
  button.addEventListener('click', function(event) {
    addNewElementAsLi();
    $(':text').val("");
  });
}

function clearEmployeeListOnLinkClick() {
  let button = $('a:first')[0];
  button.addEventListener('click', function(event) {
    $('ul.employee-list').html('');
  });
}

preventRefreshOnSubmit()
