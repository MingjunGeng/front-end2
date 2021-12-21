
import './App.css';
import { BrowserRouter as  Route, Switch } from 'react-router-dom';

import Header from './components/Header';
// import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Switch>
        <Route path="/login" component={Login}/>
        
      </Switch>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
