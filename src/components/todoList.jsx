import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/themeContext';
import {ListTodoContext} from '../contexts/todoContext'
import TodoItem from './todoItem';
import TodoForm from './todoForm';
function TodoList() {
    const {theme} =  useContext(ThemeContext)
    const {todos} = useContext(ListTodoContext)
    const {isLightTheme, dark,light} = theme
    const style = isLightTheme ? light : dark
  
    return(
        <div className="todo-list" style = {style}>
                <h1> To Do List </h1>
               <TodoForm/>
        <ul>
            {
            todos.map(item => (
               <TodoItem key={item.id} todo={item}/>
            ))
            }
        </ul>
        </div>
     
    )
}
export default TodoList