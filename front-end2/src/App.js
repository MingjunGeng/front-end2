

import './App.css';
import { BrowserRouter as  Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Guest from './components/Guest'


function App() {
  return (
    <div className="App">
      
      <Header />
      <Home />
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/Guest" component={Guest}/>
        
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
