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

function deleteTask(id) {
    dataStorage.deleteTask(id);
  }

module.exports = {
    addTask,
    deleteTask,
  };