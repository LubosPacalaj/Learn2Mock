const usedIds = []
           
class Learn2Mock {
  constructor(state){
    // console.log(state)
    this.state = state;    
  }

  createTodo() {
  // console.log('Generate Todo',todos)    
    const id = chance.integer({ min :0, max: 1000})
    const date = new Date(new Date(2020, 0, 1).getTime() + Math.random() * (new Date(2020, 11, 31).getTime() - new Date(2020, 0, 1).getTime()));
    // console.log(date)
    const formatDate = dateFns.format(     
      new Date(date),
      'DD/MM/YYYY'
    )
    // console.log(formatDate)
    let completed; 

    if(date < new Date()) {

      completed = true
    }else {

      completed = false
    }
  
    if(usedIds.includes(id)) {
      // console.log('exist')
      return this.createTodo()
    }

     const state = {
      id: id,     
      title: chance.string({ pool: 'abcde', length: 5 }),
      description: chance.string(),
      completedAt: formatDate,
      completed : completed
    }
      
    // this.title = chance.string()  
    // console.log(this.title)

    usedIds.push(state.id)
    return new TodoModel(state)
    
  }

  createTodos(count) {

    const randomArray = [];
    for (let i = 0; i < count; i++) {
      // console.log(count);
     
      randomArray.push(this.createTodo());
    }
  
    return randomArray;
  }

  serialize(todos) {
    // console.log('serialize',todos)
    let serializeData = []
    todos.forEach( todo => {
      // console.log(todo)    
      serializeData.push(todo.state)
    })

    return serializeData
  }

   exportTodos(todos) {
    // console.log('ExportTodos',todos)
   return JSON.stringify(todos)
  }
}







