import React from 'react'
import { Menu, Container } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

const renderLoggedOutView = () => {
    return <React.Fragment>
        <Container>
            <Menu.Item as={Link} to="/login">Home</Menu.Item>
        </Container>
        <Menu.Menu position="right">
            <Menu.Item as={Link} to="/signup">Sign up</Menu.Item>
        </Menu.Menu>
    </React.Fragment>
}

const loggedInView = props =>{
    return <React.Fragment>
        <Menu.Item as={Link} to="/">Home</Menu.Item>
        <Menu.Item as={Link} to="/friends">Friends</Menu.Item>
        <Menu.Menu position="right">
            <Menu.Item onClick={() => logout(props)}>Logout</Menu.Item>
        </Menu.Menu>
    </React.Fragment>
}

const logout = props => {
    localStorage.removeItem('token')
    props.history.push({
        pathname: "/",
        state: {loggedIn: false}
    })
  }

const Navbar = props => {
    return <Menu fixed='top' inverted>
        {
            props.loggedIn ? loggedInView(props) : renderLoggedOutView()
        }
    </Menu>
}

export default withRouter(Navbar);