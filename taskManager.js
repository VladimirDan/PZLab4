'use strict'

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
    return tasks.find(task => task.title === title);
  }

module.exports = {
    addTask,
    deleteTask,
    editTask,
    getTaskByTitle,
  };