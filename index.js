function preventRefreshOnSubmit(){
  document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault()
  })
}

preventRefreshOnSubmit()

let input = document.querySelector('input');

function retrieveEmployeeInformation() {
    return document.querySelector('input').value;
}

function addNewElementAsLi() {
    // let ul = document.querySelector('ul.employee-list');
    // let li = document.createElement('li');
    // li.append(retrieveEmployeeInformation());
    // ul.appendChild(li);

    let employeeName = retrieveEmployeeInformation();
    document.querySelector('ul.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
    addNewElementAsLi();
    document.querySelector('input').value = '';
    // resetInput();
  })
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a[href="#"]').addEventListener('click', function(e) {
      let ul = document.querySelector('ul.employee-list');

      while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
    }
  )};

  // function resetInput(){
  //   document.querySelector('input').value = ''
  // }