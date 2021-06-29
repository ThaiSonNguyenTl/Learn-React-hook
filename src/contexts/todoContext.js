import React , {createContext,useState,useEffect} from 'react';
export const ListTodoContext = createContext()

const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        console.log('chay 1 lan sau khi comp render va ko chay nua')
        const todos = localStorage.getItem('todos')
        todos && setTodos(JSON.parse(todos))
    },[])
    useEffect(() => {
        console.log('useEffect run')
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])
    // function add, delete
    const addTodo = todo => {
        // console.log(todo)
        setTodos([...todos, todo])
    }
    const deleteTodo = id => {
        // console.log(id)
        setTodos(todos.filter(todo => todo.id !== id))
    }
    // todo context data
    const TodoData = {todos,addTodo,deleteTodo}
    // create provider
    return(
        <ListTodoContext.Provider value = {TodoData}>
            {children}
        </ListTodoContext.Provider>
    )
}
export default TodoContextProvider