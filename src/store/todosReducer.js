import { 
    FETCH_TODO_REQUEST,FETCH_TODO_SUCCESS,FETCH_TODO_ERROR,
    ADD_TODO_REQUEST,ADD_TODO_SUCCESS, ADD_TODO_ERROR,
    DELETE_TODO_REQUEST,DELETE_TODO_SUCCESS, DELETE_TODO_ERROR,
    DONE_TODO_REQUEST,DONE_TODO_SUCCESS,DONE_TODO_ERROR 
} from "./constants";

const initStore = {
    todos:[],
    loading:false,
    error:null
}

const todosReducer = (state = initStore,action)=>{

    switch (action.type) {
        case FETCH_TODO_REQUEST:
            return {
                ...state,
                error:null,
                loading:true
            }            
            
        case FETCH_TODO_SUCCESS:
            return {
                error:null,
                loading:false,
                todos: action.payload
            }
        case FETCH_TODO_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            }  
        case ADD_TODO_REQUEST:
            return {
                ...state,
                error:null,
                loading:true
            }
        case ADD_TODO_SUCCESS:
            return {
                todos:[...state.todos,action.payload],
                error:null,
                loading:false
            }
        case ADD_TODO_ERROR:
            return {
                ...state,
                error:action.payload,
                loading:false
            }  
        case DELETE_TODO_REQUEST:
            return {
                ...state,
                error:null,
                loading:true
            }
        case DELETE_TODO_SUCCESS:
            return {
                todos:state.todos.filter(todo=> todo.id !== action.payload),
                error:null,
                loading:false
            }
        case DELETE_TODO_ERROR:
            return {
                ...state,
                error:action.payload,
                loading:false
            }
        case DONE_TODO_REQUEST:
            return {
                ...state,
                error:null,
                loading:true
            }
        case DONE_TODO_SUCCESS:
            
            let newTodosState= [...state.todos]
            const index = newTodosState.findIndex(todo => todo.id === action.payload.id)
            newTodosState[index] = {
                ...newTodosState[index],
                done: action.payload.done
            }
            console.log(newTodosState)
            return {
                todos:newTodosState,
                
            }
        case DONE_TODO_ERROR:
            return{
                ...state,
                error:action.payload,
                loading:false
            }
    
        default:
            return state
            
    }
}

export default todosReducer