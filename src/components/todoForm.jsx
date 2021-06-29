import React, {useState,useContext} from 'react'
import {ListTodoContext} from '../contexts/todoContext'
import {v4} from 'uuid';
function TodoForm() {
    const [value, setValue] = useState('')
    const {addTodo} = useContext(ListTodoContext)
    function handleInput(e){
        // console.log(e.target.value)
        setValue(e.target.value)
    }

    function handleSubmitForm(e) {
        e.preventDefault()
        const formValue = {
            id: v4(),
            title: value
        }
        addTodo(formValue)
        setValue('')
    }
    return(
        <form onSubmit = {handleSubmitForm}>
            <input 
            type ="text" 
            placeholder="Enter to do..." 
            value = {value} 
            onChange = {handleInput} 
            />
        </form>
    )
}
export default TodoForm