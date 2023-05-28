'use strict';

const dataStorage = require('./dataStorage');

function addTask(title, description, deadline) {
  const task = {
    title,
    description,
    deadline,
    completed: false,
    completedDate: null,
  };
  dataStorage.saveTask(task);
}

function deleteTask(title) {
  dataStorage.deleteTask(title);
}

function editTask(taskTitle, updatedTask) {
    dataStorage.updateTask(taskTitle, updatedTask);
}

function getTaskByTitle(title) {
  const tasks = dataStorage.getAllTasks();
  return tasks.find((task) => task.title === title);
}

function finishTask(title) {
  const task = getTaskByTitle(title);
  task.completedDate = new Date();
  task.completed = true;
  dataStorage.updateTask(title, task);
}

module.exports = {
  addTask,
  deleteTask,
  editTask,
  getTaskByTitle,
  finishTask,
};
