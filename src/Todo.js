import React, {Component} from "react";
import List from './List.js'
import Form from "./Form.js";

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {todos: []}
        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)

    }
    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    remove(id){
        this.setState({
            todos:this.state.todos.filter(t => t.id !== id)
        })
    }
    update(id, newTask){
        const newTodo = this.state.todos.map(todo => {
            if(todo.id === id){
                return{...todo, task:newTask}
            }
            return todo;
        })
        this.setState({todos : newTodo})
    }
    toggleCompletion(id){
        const newTodo = this.state.todos.map(todo => {
            if(todo.id === id){
                return{...todo, completed: !todo.completed}
            }
            return todo;
        })
        this.setState({todos : newTodo})
    }
    render(){
        const todos = this.state.todos.map(todo => {
            return(
            <List 
                key={todo.id} 
                id={todo.id} 
                task={todo.task}
                completed={todo.completed} 
                removeTodo={this.remove}
                updateTodo={this.update}
                toggleTodo={this.toggleCompletion}
                />
            )
        })
        return(
            <div>
                <h1>Todo</h1>
                <Form createTodo={this.create}/>
                    <ul>{todos}</ul>
            </div>
        )
    }
}

export default Todo;