function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return $('form input:text').val();
}

function addNewElementAsLi() {
  value = retrieveEmployeeInformation();
  $('.employee-list').prepend(`<li>${value}</li>`);
}

function clear() {
  $('form input:text').val('');
}

function addNewLiOnClick() {
  $('form input:submit').on('click', function(e) {
    addNewElementAsLi()
    clear()
  } );
}

function clearEmployeeListOnLinkClick() {
  $('a').on('click', function(e) {
    $('.employee-list').empty();
  } )
}
