import React, { useState } from 'react'
import { TodoListFormProps } from '../react-app-env'

const TodoListForm: React.FC<TodoListFormProps> = (props) => {
    const [text, setText] = useState('')
    return(
        <div>
            <input value={text} onChange={event => setText(event.target.value) } type="text" name="" id=""/>
            <button onClick={() => { props.handleTodoCreate(text); setText('') } }>Add</button>
        </div>
    )
}

export default TodoListForm