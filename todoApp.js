// Todo App
const readlineSync = require('readline-sync');
const { addTodo, listTodos, markTodoComplete} = require('./todoFunctions.js');

function runTodoApp() {

    let choice;

    do {
        console.log("\n\nTodo App Menu: 1. Add | 2. Mark Complete | 3. List | 4. Quit")

        choice = readlineSync.question("Enter choice (1-4) ");

        switch (choice) {
            case '1':
                const todo = readlineSync.question('New Todo: ');
                addTodo(todo)
                console.log('Todo added successfully!')
                break;
            case '2':
                const todoIndex = readlineSync.question('Mark as completed (Enter Todo Number): ')
                if (markTodoComplete(parseInt(todoIndex) - 1)) {
                    console.log('Todo marked as complete!')
                } else {
                    console.log('Invalid Todo Number')
                }
                break;
            case '3':
                console.log("Here are your tasks:")
                listTodos().forEach((todo, index) => {
                    console.log(`${index + 1}. ${todo.completed ? '[X]': '[]'}  ${todo.task}`)
                })
                break;
            case '4':
                console.log("Exiting the Todo App!")
                break;
            default:
                console.log("Invalid Choice")

        }
    }
    while (choice !== '4')

}


runTodoApp();
