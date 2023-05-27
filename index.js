'use strict'


const taskDisplay = require('./taskDisplay');
const taskManager = require('./taskManager');


function main() {
    const args = process.argv.slice(2);
    const command = args[0];

    switch (command) {
        case 'addTask':
          const title = args[1];
          const description = args[2];
          const deadline = new Date(Date.parse(args[3]));
          taskManager.addTask(title, description, deadline);
          break;
    

        case 'showAllTasks':
        taskDisplay.showAllTasks();
        break;

        case 'deleteTask':
            const deleteTaskId = args[1];
            taskManager.deleteTask(deleteTaskId);
            break;

        default:
            console.log('Невідома команда');
    }
}

main();