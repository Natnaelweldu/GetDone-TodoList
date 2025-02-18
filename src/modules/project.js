import {Todo} from "./todo.js";

export class Project {
    constructor(proName, proDesc){
        this.name = proName;
        this.desc = proDesc;
        this.todos = [];
    }

    setName(newProName){
        this.name = newProName;
    }

    setDesc(newProdesc){
        this.desc = newProdesc;
    }

    addTodo(task, date, priority){
        let todo = new Todo(task, date, priority);
        this.todos.push(todo);
    }

    removeTask(id){
        this.todos = this.todos.filter(todo => todo.id != id);
    }
}