import React,{useContext} from 'react'
import {ListTodoContext} from '../contexts/todoContext'
import {DELETE_TODO} from '../reducers/ActionTypes'
const TodoItem = ({todo}) => {
    const {dispatch} = useContext(ListTodoContext)
    return (
        <li 
        onClick = {() => dispatch({
            type: DELETE_TODO,
            payload: {id: todo.id}
        })}>{todo.title}</li>
    )
}

export default TodoItem
