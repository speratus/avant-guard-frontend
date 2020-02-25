import React from 'react'

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Container, Grid, Segment, Header, Button, Dimmer, Loader} from 'semantic-ui-react'

import logout from '../actions/logout'
import login from '../actions/login'
import addGameData from '../actions/addGameData'
import waitingForGame from '../actions/waitingForGame'
import inGame from '../actions/inGame'
import ChallengeSelector from '../components/ChallengeSelector'
import {BASE_URL} from '../index'

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
                    <Button 
                    primary
                    style={{fontSize: '3em'}}
                    onClick={()=>handleStartGame(props)}
                    >
                        Start Game!
                    </Button>
                </Segment>
            </Grid.Column>
        </Grid>
        {/* <Dimmer {...{active: props.waitingForGame}}>
            <Loader />
        </Dimmer> */}
    </Container>
}

const handleStartGame = props => {
    let seed = {}
    if (props.gameType === 'artists') {
        seed.artist = props.selectedArtist
    } else {
        seed.genre = props.selectedGenre
    }
    fetch(BASE_URL+'/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Token': localStorage.getItem('token'),
            Accept: 'application/json'
        },
        body: JSON.stringify({
            game: {
                ...seed
            }
        })
    }).then(res=>res.json()).then(game => {
        console.log(game)
        props.addGameData(game.questions, game.lyrics)
        props.inGame()
    })
    props.waitingForGame()
}

const mapStateToProps = state => {
    console.log('waitingForGame is', state.gameLoading.waitingForGame)
    return {
        ...state.gameOptions,
        waitingForGame: state.gameLoading.waitingForGame
    }
}

export default withRouter(connect(mapStateToProps, {logout, login, waitingForGame, inGame, addGameData})(WelcomePage))