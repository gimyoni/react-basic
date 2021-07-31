import React from "react";
import Navbar from './components/Navbar';
import Users from './pages/Users';
import Home from './pages/Home';
import Movies from './pages/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className = "container">
          <Route path="/movies">
            <Movies  />
          </Route>
          <Route path="/" exact>
            <Home  />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
