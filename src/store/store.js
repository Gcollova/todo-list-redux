import { applyMiddleware,createStore,compose } from "redux";
import thunk from 'redux-thunk';
import todosReducer from "./todosReducer";

const initStore = {
    todos:[],
    loading:false,
    error:null
}

const store = createStore(todosReducer,initStore,compose(applyMiddleware(thunk)))

export default store

