class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        this.todo_data.todo.push(todo);
        console.log(todo);
        return this.todos;
    }

    delete_todo(id){
        this.todo_data.todo.shift(id, 1);
        console.log(id);
        return this.todos;
    }

    update_todo(id, todo){
        this.todo_data.todo[id] = todo;
        console.log(id, todo);
        return this.todos;
    }
}

a = new todoservice();
a.add_todo({
    "title": "T4",
    "description": "D4",
    "done": false
});
a.delete_todo(1);
a.update_todo(1,{"title": "T4",
"description": "D4",
"done": false})

module.exports= todoservice;