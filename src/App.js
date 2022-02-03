
import styled from 'styled-components';
import './App.css';
import Card from './components';
import {useDispatch} from 'react-redux';
import {  fetchRequest } from './store/action';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch()

  const Main = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;





  useEffect(() => {
    dispatch(fetchRequest())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div className="App">
      <Main>

        <Card/>
      </Main>
      
    </div>
  );
}

export default App;
