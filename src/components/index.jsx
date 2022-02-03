/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid';
import {useSelector, useDispatch} from 'react-redux';
import {  useState } from "react";


import { addRequest, deleteRequest, fetchRequest, patchRequest } from "../store/action";



    const Title = styled.h1`
        color: white;
    
    `;
    const Main = styled.div`
        height: 600px;
        width: 540px;
        background-color: black;
        border-radius: 10px;   
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        
    `;
    const TodoContainer = styled.div`
        height: 70%;
        width: 90%;
        background-color: lightgray;

        
    
    `;

    const Form = styled.form`
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    `;

    const List = styled.ul`

        display: flex;
        flex-direction: column;
        text-align: left;
        list-style-type: decimal;
        li{
            margin: 5px 0;
        }
    `;

    const Done = styled.input`
    `;


const Card = () => {
    const dispatch = useDispatch();
    const  todos =  useSelector(store => store.todos);
    
    
    
    const [todoState, setTodoState] = useState({
        text: "",
        done: false,
        id: uuidv4()
    })    
    
    function  handleAddTodo(e){
        e.preventDefault();
        dispatch(addRequest(todoState))
        setTodoState({...todoState,text:""})
        
    }
    function handleDeleteTodo(id){        
        dispatch(deleteRequest(id));
        dispatch(fetchRequest());
    }

    function handleDoneTodo(id,reqdone){
        dispatch(patchRequest(id,reqdone));
        dispatch(fetchRequest());
    }

    return(
        <>
            <Main>
                <Title>My Todos</Title>
                <TodoContainer>
                    <List>
                        {todos.map((todo)=><li key={todo.id}>{todo.text}<Done type="checkbox" onChange={(e)=>handleDoneTodo(todo.id,e.target.checked) } defaultChecked={todo.done} /> <button onClick={()=>handleDeleteTodo(todo.id)}>X</button> </li>)}                       
                    </List>
                </TodoContainer>
                <Form onSubmit={(e)=>{handleAddTodo(e)}}>
                    <input value={todoState.text} type="text" name="text" onChange={(e)=>{ setTodoState({...todoState,text:e.target.value});} } />
                    <button onClick={()=>setTodoState({...todoState,id:uuidv4()}) }>ADD</button>
                </Form>                
            </Main>
        </>
    )
}

export default Card