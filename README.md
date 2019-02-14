# Acting On Events Lab

## Instructions

In this lab, you will create a form that adds Scuber employees. It also allows
us to clear the list of employees upon a click to the "Clear Employee List"
link. We will build up to this functionality with small functions, so read the
tests carefully.

You will find your tests underneath the HTML after you run `learn-test`. We'll
be testing against this with the `index.html` document, but you should still
write your code in `index.js`. Write the following functions:

- `retrieveEmployeeInformation()`: This retrieves the employee information from
  the input. It returns a string equal to the value in the input.

- `addNewElementAsLi()`: This fuÇnction takes the value retrieved from the
  previous `retrieveEmployeeInformation` function and adds that string to a new
  list element which is appended to the `ul` with class "employee-list".

- `addNewLiOnClick()`: This adds the employee name as an li element on click and
clears the input value.

- `clearEmployeeListOnLinkClick()`: This empties out the employee list when
  "Clear employee list" button clicked.

Have fun, and good luck!

## Resources

- [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

