'use strict';

const taskDisplay = require('./taskDisplay');
const taskManager = require('./taskManager');
const dataStorage = require('./dataStorage');

function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (command === 'add') {
    const title = args[1];
    const description = args[2];
    const deadline = new Date(Date.parse(args[3]));
    taskManager.addTask(title, description, deadline);
  } else if (command === 'show') {
    const taskType = args[1];
    taskDisplay.show(taskType);
  } else if (command === 'delete') {
    const title = args[1];
    taskManager.deleteTask(title);
  } else if (command === 'edit') {
    const title = args[1];
    const existingTask = taskManager.getTaskByTitle(title);
    if (!existingTask) {
      console.log('Task not found.');
    }

    const updatedTask = {
      title: args[2] || existingTask.title,
      description: args[3] || existingTask.description,
      deadline: args[4] || existingTask.deadline,
      completed: existingTask.completed,
      completedDate: existingTask.completedDate,
    };

    taskManager.editTask(taskTitle, updatedTask);
  } else if (command === 'finish') {
    const task = args[1];
    taskManager.finishTask(task);
  } else {
    console.log('Unknown command');
  }
}

main();
