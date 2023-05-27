'use strict'


const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'tasks.json');

function loadTasks() {
    try {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.error('Error loading tasks:', err);
      return [];
    }
  }

function saveTasks(tasks) {
    try {
      const data = JSON.stringify(tasks, null, 2);
      fs.writeFileSync(DATA_FILE, data, 'utf8');
    } catch (err) {
      console.error('Error saving tasks:', err);
    }
  }

function saveTask(task) {
    const tasks = loadTasks();
    tasks.push(task);
    saveTasks(tasks);
  }

  function getAllTasks() {
    return loadTasks();
  }



  module.exports = {
    saveTask,
    getAllTasks,
  };