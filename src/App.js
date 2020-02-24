import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import WelcomePage from './containers/WelcomePage'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

function App() {
  return (
    <Router>
      <Navbar />

      <Route exact path="/">
        <WelcomePage />
      </Route>

      <Route path="/login">
        <LoginForm />
      </Route>

      <Route path="/signup">
        <SignupForm />
      </Route>
    
    </Router>
  );
}

export default App;
