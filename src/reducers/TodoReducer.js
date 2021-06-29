import { GET_TODOS, SAVE_TODO, ADD_TODO, DELETE_TODO } from './ActionTypes'

export const TodoReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_TODOS:
            const todos = localStorage.getItem('todos')
            console.log(todos)
            if (todos) state = JSON.parse(todos)
            return state
        case SAVE_TODO:
            localStorage.setItem('todos', JSON.stringify(payload.todos))
                // console.log(payload)
            return state
        case ADD_TODO:
            // console.log(payload)
            return [...state, payload.todos]
        case DELETE_TODO:
            state = state.filter(todo => todo.id !== payload.id)
            return state
        default:
            return state
    }
}