'use strict';

const taskDisplay = require('./taskDisplay');
const taskManager = require('./taskManager');
const dataStorage = require('./dataStorage');

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

        case 'show':
            const taskType = args[1];
            taskDisplay.show(taskType);
            break;

        case 'delete':
            const deleteTaskTitle = args[1];
            taskManager.deleteTask(deleteTaskTitle);
            break;

        case 'editTask':
            const taskTitle = args[1];
            const existingTask = taskManager.getTaskByTitle(taskTitle);
            if (!existingTask) {
                console.log('Task not found.');
                break;
            }

            const updatedTask = {
                title: args[2] || existingTask.title,
                description: args[3] || existingTask.description,
                deadline: args[4] || existingTask.deadline,
                completed: existingTask.completed,
                completedDate: existingTask.completedDate,
            };

            taskManager.editTask(taskTitle, updatedTask);
            break;

        case 'finish':
            const taskToFinish = args[1];
            taskManager.finishTask(taskToFinish);
            break;

        default:
            console.log('Unknown command');
    }
}

main();
