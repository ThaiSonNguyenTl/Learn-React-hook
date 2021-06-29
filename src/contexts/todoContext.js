import React , {createContext,useReducer,useEffect} from 'react';
import {TodoReducer} from '../reducers/TodoReducer'
import {GET_TODOS,SAVE_TODO} from '../reducers/ActionTypes'
export const ListTodoContext = createContext()
const TodoContextProvider = ({children}) => {
    
    const [todos, dispatch] = useReducer(TodoReducer, [])
    
    useEffect(() => {
        dispatch({
            type: GET_TODOS,
            payload:null
        })
    },[])

    useEffect(() => {
       dispatch({
           type: SAVE_TODO,
           payload: {todos},
       })
    },[todos])
 
    // todo context data
    const TodoData = {todos,dispatch}
    // create provider
    return(
        <ListTodoContext.Provider value = {TodoData}>
            {children}
        </ListTodoContext.Provider>
    )
}
export default TodoContextProvider