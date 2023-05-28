'use strict'

const taskDisplay = require('./taskDisplay');
const taskManager = require('./taskManager');
const dataStorage = require('./dataStorage');


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

function show(type) {
    const tasks = dataStorage.getAllTasks();
    switch (type) {
      case 'all':
            console.log('All Tasks:');
            for (const task of tasks) {
              console.log(`- ${task.title.padEnd(15)} (Deadline: ${task.deadline})`);
              console.log(`${task.description}\n`);
            }
        break;

      case 'completed':
        console.log('Completed Tasks:');
        const completedTasks = tasks.filter(task => task.completed);
        for (const task of completedTasks) {
          console.log(`- ${task.title.padEnd(15)} (Deadline: ${task.deadline})`);
          console.log(`${task.description}\n`);          }
        break;

      case 'overdue':
        console.log('Overdue Tasks:');
        const currentDate = new Date();
        const overdueTasks = tasks.filter(task => !task.completed && task.deadline < currentDate);
        for (const task of overdueTasks) {
          console.log(`- ${task.title.padEnd(15)} (Deadline: ${task.deadline})`);
          console.log(`${task.description}\n`);
        }
        break;
        
      case 'incompleted':
        console.log('Incompleted Tasks:');
        const incompletedTasks = tasks.filter(task => !task.completed);
        for (const task of incompletedTasks) {
          console.log(`- ${task.title.padEnd(15)} (Deadline: ${task.deadline})`);
          console.log(`${task.description}\n`);
        }
        break;
      default:
        console.log('Invalid task type.');
    }
  }


module.exports = {
    displayMenu,
    show,
  };