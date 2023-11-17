// todoFunctions

const todos = [];

function addTodo(task) {
    todos.push({task, completed: false})
}

function listTodos() {
    return todos
}

function markTodoComplete(todoIndex){
    if (todoIndex >=0 && todoIndex < todos.length){
        todos[todoIndex].completed = true;
        return true
    }
    return false;
}

module.exports = {
    addTodo,
    listTodos,
    markTodoComplete
}
