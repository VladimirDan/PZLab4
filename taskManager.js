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

module.exports = {
    addTask,
    deleteTask,
  };