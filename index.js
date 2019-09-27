function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

// let input = document.querySelector('input')

// retrieves the employee information from the input
function retrieveEmployeeInformation(){
    return document.querySelector('input').value
}

// adds an li element with the text as the value of the input
function addNewElementAsLi() {
    let newListItem = retrieveEmployeeInformation();

    // 1st attempt
    // let addItem = document.querySelector('.employee-list');
    // return addItem.add('li', newListItem);

    // 2nd attempt
    // $( "li" ).add( document.querySelector('.employee-list')[ 0 ], newListItem);

    // 3rd attempt
    document.querySelector('.employee-list').append(newListItem);
}

function addNewLiOnClick() {

    // 1st attempt
    // return document.querySelector(".employee-list").append(newListItem);

    // 2nd attempt
    // $( "#target" ).click(function() {
    //     alert( "Handler for .click() called." );
    // });

    // 3rd attempt
    let submit = document.querySelector('input[type="submit"]');

    submit.addEventListener('click', function(event) {
        // adds the employee name as an li element on click
        addNewElementAsLi();

        // clears the input value
        document.querySelector('input').value = '';
    });
}

// empties out the employee list when "Clear employee list" button clicked
function clearEmployeeListOnLinkClick() {
    let link = document.querySelector('a');
    let ul = document.querySelector('.employee-list');

    link.addEventListener('click', function(event) {
        // ul.empty();
        ul.innerText = "";
    });
}
