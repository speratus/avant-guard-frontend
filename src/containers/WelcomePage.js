import React from 'react'

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Container, Grid, Segment, Header} from 'semantic-ui-react'

import logout from '../actions/logout'
import login from '../actions/login'
import ChallengeSelector from '../components/ChallengeSelector'

const WelcomePage = props => {
    if (!localStorage.getItem('token')) {
        props.logout()
        props.history.push({
            pathname: "/login"
        })
    } else
        props.login()
    return <Container style={{marginTop: '3em'}}>
        <Grid 
            textAlign='center'
            style={{height: '100vh'}}
            verticalAlign='middle'
        >
            <Grid.Column width={9}>
                <Segment>
                    <Header as='h1' style={{fontSize: '5em'}}>New Game</Header>
                    <ChallengeSelector />
                </Segment>
            </Grid.Column>
        </Grid>
    </Container>
}

export default withRouter(connect(null, {logout, login})(WelcomePage))