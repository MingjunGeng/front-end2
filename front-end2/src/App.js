

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Guest from './components/Guest'


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/Signup" component={Signup}/>
        <Route path="/guest" component={Guest}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
