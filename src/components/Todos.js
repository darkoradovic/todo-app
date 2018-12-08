import React from 'react';

const todos = (props) => {
    const todoList = props.todos.length ? (
        props.todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => { props.deleteTodo(todo.id) }}>{todo.content}</span>
                </div>
            )
        })
    ) : (
            <p className="center">You have no todo's left, YAY!</p>
        )

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default todos;