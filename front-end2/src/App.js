import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Link } from 'react-router-dom'
import axios from 'axios';
import * as yup from 'yup';

import Home from './components/Home';
import schema from './components/Validation/schema';
import Signup from './components/Signup';
import Login from './components/Login';
import Guest from './components/Guest';
import Organizer from './components/Organizer';

import './App.css';
import styled from 'styled-components';
import Background from './images/pexels-pixabay-326279.jpg'


const StyledApp = styled.div`

background-image: url(${Background});
background-repeat: no-repeat;
background-position: fixed;
background-size: auto;
height: 100%;
.App{
  padding:2%;
}
`


function App() {

  return (
  <StyledApp>
    <div className="App">
           
    <Router>
      <Switch>
      
      <Route path='/Signup'>
        <Signup />
      </Route>
      <Home  />
      </Switch>
     </Router> 
     

    </div>
  </StyledApp>  
  );
}

export default App;
