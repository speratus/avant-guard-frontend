import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import WelcomePage from './containers/WelcomePage'

function App() {
  return (
    <Router>
      <Navbar />

      <Route exact path="/">
        <WelcomePage />
      </Route>

      <Route path="/login">
        
      </Route>
    </Router>
  );
}

export default App;
