import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import WelcomePage from './containers/WelcomePage'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import GameContainer from './containers/GameContainer'

import {connect} from 'react-redux'

const doDisplayWelcome = props => {
  if (props.inGame) {
    return <GameContainer />
  } else {
    return <WelcomePage />
  }
}

function App(props) {
  return (
    <Router>
      <Navbar />

      <Route exact path="/">
        {doDisplayWelcome(props)}
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

const mapStateToProps = state => {
  return {
    inGame: state.gameLoading.inGame
  }
}

export default connect(mapStateToProps)(App);
