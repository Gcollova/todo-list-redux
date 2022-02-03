
import axios from "axios";
import { 
    FETCH_TODO_REQUEST,FETCH_TODO_SUCCESS,FETCH_TODO_ERROR,
    ADD_TODO_REQUEST,ADD_TODO_SUCCESS, ADD_TODO_ERROR,
    DELETE_TODO_REQUEST,DELETE_TODO_SUCCESS, DELETE_TODO_ERROR,
    DONE_TODO_SUCCESS,DONE_TODO_ERROR 
} from "./constants";


const fetchRequest = () => {
    return async (dispatch)=>{
        dispatch({type:FETCH_TODO_REQUEST})
        try {
            const {data:todos} = await axios.get('http://localhost:3000/todo')
            dispatch({type:FETCH_TODO_SUCCESS,payload:todos})
        } catch (error) {
            dispatch({type:FETCH_TODO_ERROR,payload:error})
        }
    }
};

const addRequest = (todo) => {
    return async (dispatch)=>{
        dispatch({type:ADD_TODO_REQUEST})
        try {
           const {data} = await axios.post('http://localhost:3000/todo',todo)
            dispatch({type:ADD_TODO_SUCCESS,payload:data})
        } catch (error) {
            dispatch({type:ADD_TODO_ERROR})
            
        }
    }
}

const deleteRequest = (id) => {
    return async (dispatch) => {
        dispatch({type:DELETE_TODO_REQUEST})
        try {
            const {data:todos} = await axios.delete(`http://localhost:3000/todo/${id}`)
             dispatch({type:DELETE_TODO_SUCCESS,payload:todos})
        } catch (error) {
            dispatch({type:DELETE_TODO_ERROR})
            
        }
    }
}

const patchRequest = (id,done) => {
    return async (dispatch)=> {        
        try {
           const {data} = await axios.patch(`http://localhost:3000/todo/${id}`,{done}) 
           dispatch({type:DONE_TODO_SUCCESS,payload:{data,id,done}})
        } catch (error) {
            dispatch({type:DONE_TODO_ERROR})            
        }
    }
}

export {
    fetchRequest,
    addRequest,
    deleteRequest,
    patchRequest
}