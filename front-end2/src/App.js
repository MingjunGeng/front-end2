import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import styled from 'styled-components';

const StyledApp = styled.div`
display: flex;
justify-content: center;
.App{
  background-color: orange;
}
width:100%;
height:100vh;
nav {
  background-color: red;
}

`

function App() {



  return (
  <StyledApp>
    <div className="App">
      <header className='navpage'>
      <h1>POTLUCK PALOOZA</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Route exact path='/' component={Home}>
            <Home />
          </Route>
        </nav>
      </header>
    </div>
  </StyledApp>  
  );
}

export default App;
