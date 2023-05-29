# Task Manager

## [Design document](https://docs.google.com/document/d/1wOZQT3JZNSvGeP0AkZhOKvR5OAstvrzG/edit?usp=share_link&ouid=112528746514985709552&rtpof=true&sd=true)

## Description

The Task Manager is a command-line application that allows you to manage your tasks and deadlines. You can add tasks, edit them, mark them as completed, and delete tasks. 


## Installation

1. Install Node.js.

2. Clone the repository:
git clone [https://github.com/VladimirDan/PZLab4](https://github.com/VladimirDan/PZLab4)

3. Navigate to the project directory.

4. Install the dependencies:
npm install

## Usage

To run the application, open the terminal and navigate to the project directory. Use the following commands:

- To add a task:

node index.js add <title> <description> <deadline>

Replace `<title>`, `<description>`, and `<deadline>` with the respective details of the task.

- To show tasks:

node index.js show <taskType>

Replace `<taskType>` with one of the following options:
  - `all`: Show all tasks.
  - `completed`: Show completed tasks.
  - `overdue`: Show overdue tasks.
  - `incompleted`: Show incompleted tasks.
- To delete a task:

node index.js delete <title>

Replace `<title>` with the title of the task you want to delete.

- To edit a task:

node index.js edit <title> [<newTitle>] [<newDescription>] [<newDeadline>]

Replace `<title>` with the title of the task you want to edit. Optional parameters `<newTitle>`, `<newDescription>`, and `<newDeadline>` can be provided to update the respective details of the task.

- To mark a task as completed:

node index.js finish <title>

Replace `<title>` with the title of the task you want to mark as completed.
