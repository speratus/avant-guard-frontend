import React from 'react'
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react'

class SignupForm extends React.Component {
    state = {
        name: '',
        username: '',
        password: '',
        password_confirmation: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
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

export default SignupForm