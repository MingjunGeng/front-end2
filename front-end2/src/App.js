import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import styled from 'styled-components';
import Background from './images/pexels-pixabay-326279.jpg'



const StyledApp = styled.div`

background-image: url(${Background});
background-repeat: no-repeat;
background-position: fixed;
background-size: cover;
.App{
  padding:2%;
}
`

function App() {



  return (
  <StyledApp>
    <div className="App">     
    <Router>
      <Home />
     </Router> 
    </div>
  </StyledApp>  
  );
}

export default App;
