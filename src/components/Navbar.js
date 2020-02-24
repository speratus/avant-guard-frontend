import React from 'react'
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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

const loggedInView = () =>{
    return <React.Fragment>
        <Menu.Item as={Link} to="/">Home</Menu.Item>
        <Menu.Item as={Link} to="/friends">Friends</Menu.Item>
        <Menu.Menu position="right">
            <Menu.Item as={Link} to="/logout">Logout</Menu.Item>
        </Menu.Menu>
    </React.Fragment>
}

const Navbar = props => {
    let loggedIn = !!localStorage.getItem('token')
    return <Menu fixed='top' inverted>
        {
            loggedIn ? loggedInView() : renderLoggedOutView()
        }
    </Menu>
}

export default Navbar;