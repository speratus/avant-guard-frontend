import React from 'react'
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

import {BASE_URL} from '../index'

class SignupForm extends React.Component {
    initialState = {
        name: '',
        username: '',
        password: '',
        password_confirmation: ''
    }

    state = {
        ...this.initialState
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        const {name, username, password, password_confirmation} = this.state
        this.setState({...this.initialState})
        fetch(BASE_URL+"/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user: {
                    name, username, password, password_confirmation
                }
            })
        }).then(res => res.json()).then(user => {
            console.log(user)
            this.props.history.push({
                pathname: '/login',
                state: {
                    'username_created': !!user.id
                }
            })
        })
    }

    render() {
        return <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
            <Grid.Column style={{maxWidth: 500}}>
                <Header>Please Enter your information below</Header>
                <Segment>
                    <Form onSubmit={this.onSubmit}>
                        <label>Name</label>
                        <Form.Input 
                            fluid
                            name="name"
                            icon="address book"
                            iconPosition='left'
                            placeholder='Name'
                            onChange={this.onChange}
                            value={this.state.name}
                        />
                        <label>Username</label>
                        <Form.Input 
                            fluid
                            name="username"
                            icon="user"
                            iconPosition='left'
                            placeholder="Username"
                            onChange={this.onChange}
                            value={this.state.username}
                        />
                        <label>Password</label>
                        <Form.Input 
                            fluid
                            name="password"
                            icon="lock"
                            iconPosition='left'
                            placeholder="Password"
                            type="password"
                            onChange={this.onChange}
                            value={this.state.password}
                        />
                        <label>Confirm Password</label>
                        <Form.Input 
                            fluid
                            name="password_confirmation"
                            icon="lock"
                            iconPosition='left'
                            placeholder="Confirm Password"
                            type="password"
                            onChange={this.onChange}
                            value={this.state.password_confirmation}
                        />
                        <Button fluid primary>Submit</Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    }
}

export default withRouter(SignupForm)