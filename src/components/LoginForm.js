import React from 'react'
import { Grid, Form, Segment, Header, Button } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import login from '../actions/login'
import {connect} from 'react-redux'

import {BASE_URL} from '../index'

class LoginForm extends React.Component {
    state = {
        username: '',
        password: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        console.log("Submitting login info")

        const {username, password} = this.state
        this.setState({username: '', password: ''})

        fetch(BASE_URL+'/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username, password
                }
            })
        }).then(res => res.json()).then(message => {
            console.log(message)
            if (message.token) {
                localStorage.setItem("token", message.token)
                localStorage.setItem("userId", message.user_id)
                this.props.login()
                this.props.history.push({
                    pathname: '/',
                    state: {
                        loggedIn: true
                    }
                })
            } else {
                alert('Incorrect Username or password.')
            }
        })
    }

    render() {
        return <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
            <Grid.Column style={{maxWidth: 600}}>
                <Header as='h1'>Please Enter your Username and Password</Header>
                <Form onSubmit={this.onSubmit}>
                    <Segment>
                        <label>Username</label>
                        <Form.Input 
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder="Username"
                            name="username"
                            onChange={this.onChange}
                            value={this.state.username}
                        />
                        <label>Password</label>
                        <Form.Input 
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder="Password"
                            type='password'
                            name='password'
                            onChange={this.onChange}
                            value={this.state.password}
                        />
                        <Button fluid primary>Login</Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    }
}

export default withRouter(connect(null, {login})(LoginForm))