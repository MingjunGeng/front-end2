

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Guest from './components/Guest'


function App() {
  return (
    <div className="App">
       {/* <Router> */}
        <Header />
      {/* <Home /> */}

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/guest" component={Guest}/>
        
      </Switch>
        <Footer/>
      {/* </Router> */}
    </div>
  );
}

export default App;
