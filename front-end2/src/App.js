import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';


function App() {



  return (
    <div className="App">
      <header className='navpage'>
        <nav>
          <Link to='/'>Home</Link>
          <Route exact path='/' component={Home} />
        </nav>
      </header>
    </div>
  );
}

export default App;
