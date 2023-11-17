// Todo App
const readlineSync = require('readline-sync');

function runTodoApp() {

    let name = readlineSync.question("What is your name? ");

    console.log("Hello there " + name)
}


runTodoApp();
