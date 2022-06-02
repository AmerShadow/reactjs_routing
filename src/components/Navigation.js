import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';


import Home from './Home';
import About from './About';
import Contact from './Contact';

class Navigation extends React.Component{
  
    render() {
        return <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About Us</Link>
          </li>
          <li>
          <Link to="/contact">Contact us</Link>

          </li>
        </ul>

        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
        </Switch>
      </div>
    </Router>;
      }
}


export default Navigation;