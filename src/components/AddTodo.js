import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }

    changeHandler = (e) => {
        this.setState({ content: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.addTodo(this.state);
        this.setState({ content: '' });//kad submitujemo vracamo input na prazno
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>Add new todo</label>
                    <input type="text" onChange={this.changeHandler} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTodo;