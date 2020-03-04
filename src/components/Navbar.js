import React from 'react'
import { Menu, Container, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'

import setLogout from '../actions/logout'
import resetGamePhase from '../actions/resetGamePhase'
import resetGameState from '../actions/resetGameState'

const renderLoggedOutView = () => {
    return <React.Fragment>
        <Menu.Menu position="right">
            <Menu.Item as={Link} to="/signup">Sign up</Menu.Item>
        </Menu.Menu>
    </React.Fragment>
}

const loggedInView = props =>{
    return <React.Fragment>
        
        <Menu.Item as={Link} to="/friends">
            <Icon name="address book" />
            Friends
        </Menu.Item>
        <Menu.Menu position="right">
            <Menu.Item onClick={() => {
                props.history.push({
                    pathname: `/profile`
                })
            }}>
                <Icon name="user" />
                Profile
            </Menu.Item>
            <Menu.Item onClick={() => logout(props)}>Logout</Menu.Item>
        </Menu.Menu>
    </React.Fragment>
}

const logout = props => {
    localStorage.clear()
    props.setLoggedOut()
    props.resetGamePhase()
    props.resetGameState()
    props.history.push({
        pathname: "/",
        state: {loggedIn: false}
    })
  }

const Navbar = props => {
    return <Menu>
        <Menu.Item className={'brand'}>
            Avant Garde
        </Menu.Item>
        <Menu.Item as={Link} to="/">
            <Icon name="home" />
            Home
        </Menu.Item>
        {
            props.loggedIn ? loggedInView(props) : renderLoggedOutView()
        }
    </Menu>
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default withRouter(
    connect(
        mapStateToProps, 
        {
            setLoggedOut: setLogout, 
            resetGamePhase, 
            resetGameState
        }
    )(Navbar)
)