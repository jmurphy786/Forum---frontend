import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import './App.css';
import LoginPage from './containers/LoginPage';



class App extends Component {

  constructor(props) {
    super(props); 
  }

  render() {
   

    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LoginPage} />
        </div>
      </Router>
      
    );
  }
}

export default App;