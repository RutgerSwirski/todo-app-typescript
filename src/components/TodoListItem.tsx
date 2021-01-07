import React from 'react'
import { TodoListItemProps } from '../react-app-env'

const TodoListItem: React.FC<TodoListItemProps> = (props) => {
    return (
        <div style={{display: "flex"}}>
            <input type="checkbox" name="" id="" checked={props.todo.completed} onChange={() => props.handleTodoUpdate(props.todo.id)} />
            <h3>{props.todo.text}</h3>
            <button onClick={() => { props.handleTodoDelete(props.todo.id) }}>x</button>
        </div>
    )
}

export default TodoListItem