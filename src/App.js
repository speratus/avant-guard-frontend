import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import WelcomePage from './containers/WelcomePage'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import GameContainer from './containers/GameContainer'
import ProfilePage from './containers/ProfilePage'
import FriendsListContainer from './containers/FriendsListContainer'

import {connect} from 'react-redux'

const doDisplayWelcome = props => {
  if (props.gamePhase === 'none') {
    console.log('no game, displaying welcome.')
    return <WelcomePage />
  } else {
    console.log('game in progress, displaying gamecontainer')
    return <GameContainer />
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

      <Route path='/users/:userId' render={routeParams => {
        return <ProfilePage {...routeParams} />
      }} />

      <Route path='/friends'>
        <FriendsListContainer />
      </Route>
    
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    gamePhase: state.gamePhase
  }
}

export default connect(mapStateToProps)(App);
