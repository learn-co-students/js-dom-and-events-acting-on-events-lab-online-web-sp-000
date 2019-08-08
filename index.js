function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

$('input[type="submit"]')[0].addEventListener('submit', addNewLiOnClick);
$('a:first')[0].addEventListener('click', clearEmployeeListOnLinkClick);

function retrieveEmployeeInformation() {
  return $('input:first')[0].value;
}

function addNewElementAsLi() {
  let e = retrieveEmployeeInformation();
  let h = $('ul.employee-list:first').html() + `<li>${e}</li>`;
  $('ul.employee-list:first').html(h);
  $('input:first')[0].value = '';
}

function addNewLiOnClick() {
  addNewElementAsLi();
}

function clearEmployeeListOnLinkClick() {
  $('ul.employee-list:first').html('');
}
