

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';
import Guest from './components/Guest'
import Logout from './components/Logout';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/recipes/:id" component={Recipe}/>
        <Route path="/recipes" component={Recipes}/>
        <Route path="/guest" component={Guest}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
