'use strict'


function displayMenu() {
  console.log('==== Task Manager ====');
  console.log('1. Add Task');
  console.log('2. Edit Task');
  console.log('3. Delete Task');
  console.log('4. Mark Task as Completed');
  console.log('5. Show All Tasks');
  console.log('6. Show Incomplete Tasks');
  console.log('7. Show Overdue Tasks');
  console.log('8. Exit');
}

module.exports = {
    displayMenu
  };