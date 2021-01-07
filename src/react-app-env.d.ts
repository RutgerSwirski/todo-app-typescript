/// <reference types="react-scripts" />

export interface Todo {
    id: number,
    text: string,
    completed: boolean
}

export interface TodoListItemProps {
    todo: Todo
    handleTodoUpdate: ( id: number) => void
    handleTodoDelete: ( id: number) => void
}

export interface TodoListFormProps {
    handleTodoCreate: (text: string) => void
}
