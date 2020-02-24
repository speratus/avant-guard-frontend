import React from 'react'
import { Grid, Form, Segment, Header, Button } from 'semantic-ui-react'

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
        //Finish this code later!
    }

    render() {
        return <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
            <Grid.Column style={{maxWidth: 600}}>
                <Header>Please Enter your Username and Password</Header>
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

export default LoginForm