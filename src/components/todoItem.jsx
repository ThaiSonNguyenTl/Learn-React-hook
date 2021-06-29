import React,{useContext} from 'react'
import {ListTodoContext} from '../contexts/todoContext'

const TodoItem = ({todo}) => {
    const {deleteTodo} = useContext(ListTodoContext)
    return (
        <li onClick = {() => deleteTodo(todo.id)}>{todo.title}</li>
    )
}

export default TodoItem
