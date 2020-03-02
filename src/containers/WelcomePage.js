import React from 'react'

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Container, Grid, Segment, Header, Button, Dimmer, Loader, Search} from 'semantic-ui-react'

import logout from '../actions/logout'
import login from '../actions/login'
import addGameData from '../actions/addGameData'
import ChallengeSelector from '../components/ChallengeSelector'
import nextGamePhase from '../actions/nextGamePhase'
import LeaderboardCard from './LeaderboardCard'
import SearchBox from '../components/SearchBox'
import {constructGame} from '../fetches/gameFetches'
import resetGamePhase from '../actions/resetGamePhase'


const WelcomePage = props => {
    if (!localStorage.getItem('token')) {
        props.logout()
        props.history.push({
            pathname: "/login"
        })
        return null;
    } else {
        props.login()
        return <Container style={{marginTop: '3em'}}>
            <Grid 
                textAlign='center'
                style={{height: '100vh'}}
                verticalAlign='middle'
                columns={2}
            >
                <Grid.Row>
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
                    <Grid.Column width={5}>
                        <LeaderboardCard />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={16} >
                        <SearchBox />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    }
}

const handleStartGame = props => {
    let seed = {}
    if (props.gameType === 'artists') {
        if (props.selectedArtist === '') {
            alert("You must select an artist before you can play!")
            return
        }
        seed.artist = props.selectedArtist
    } else {
        if (props.selectedGenre === '') {
            alert("You must select a genre before you can play!")
            return
        }
        seed.genre = props.selectedGenre
    }
    constructGame(seed).then(game => {
        console.log(game)
        if (game.message) {
            alert(game.message)
            console.log('Resetting game phase')
            props.resetGamePhase()
            return
        }
        props.addGameData(game.questions, game.lyrics, game.id, game.multiplier, game.clip_address)
        props.nextGamePhase()
    })
    props.nextGamePhase()
}

const mapStateToProps = state => {
    return {
        ...state.gameOptions,
        gamePhase: state.gamePhase
    }
}

export default withRouter(connect(
    mapStateToProps, 
    {
        logout, 
        login,
        addGameData,
        nextGamePhase,
        resetGamePhase
    }
)(WelcomePage))