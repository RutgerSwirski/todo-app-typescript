import React, {  useState } from 'react'
import { Todo } from '../react-app-env'
import TodoListItem from '../components/TodoListItem'
import TodoListForm from '../components/TodoListForm'

const todosArray = [
    {
        id: 1,
        text: "Does this work?",
        completed: true
    }
]

function TodoList() {
    const [todos, setTodos] = useState<Todo[]>(todosArray)

    const handleTodoUpdate = (id: number) => {
        const newTodos = todos.map(todo => { 
            if(todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        })
        setTodos(newTodos)
    }

    const handleTodoCreate = (text: string) => {
        const allTodos: Todo[] = [...todos]
        const newTodo: Todo = { id: allTodos.length + 1, text: text, completed: false }
        allTodos.push(newTodo)
        setTodos(allTodos)
    }

    const handleTodoDelete = (id: number) => {
        const allTodos = [...todos]
        const newTodos = allTodos.splice(id, 1)
        setTodos(newTodos)
    }

    return (
        <div>
            <h1>Todo List</h1>
            { todos.map((todo) => (
                <TodoListItem todo={todo} key={todo.id} handleTodoUpdate={ handleTodoUpdate } handleTodoDelete={ handleTodoDelete } />
            )) }
            <TodoListForm handleTodoCreate={handleTodoCreate} />
        </div>
    )
    
}


export default TodoList