import React, { Component } from 'react';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy milk' },
      { id: 2, content: 'play mario kart' }
    ]
  }

  deleteTodoHandler = (id) => {
    //console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({ todos: todos });
  }

  addTodoHandler = (todo) => {
    todo.id = Math.random();
    //let todos = [...this.state.todos, todo.id] nije radilo jer sam stavio todo.id da stavlja u niz umesto samo todo 
    let todos = [...this.state.todos, todo]//pravimo novi niz sa sadrzajem iz starog ...this
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodoHandler} />
        <AddTodo addTodo={this.addTodoHandler} />
      </div>
    );
  }
}

export default App;
