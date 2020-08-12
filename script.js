const todoButton = document.getElementById('todo-but')
const todosInput = document.getElementById('todos')
const todoList = document.getElementById('todo_list')
const learn2mock = new Learn2Mock();

todoButton.addEventListener('click', () => {
   
     if(todosInput.value !== "") { 
        const todos = learn2mock.createTodos(Number(todosInput.value));
          // console.log('Todos',todos)
        const serializingTodo = learn2mock.serialize(todos)
        const exportTodo = learn2mock.exportTodos(serializingTodo);

        todosInput.value = "";
        console.log(`Todos ${serializingTodo.length}`,exportTodo) 
        todoList.innerText = `${serializingTodo.length} Todos ${exportTodo} `

    }
})