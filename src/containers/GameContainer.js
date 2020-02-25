import React from 'react'
import { Grid, Header, Segment, Container, Rail } from 'semantic-ui-react'
import {connect} from 'react-redux'

import Question from '../components/Question'
import NextComponent from '../components/NextComponent'
import Timer from '../components/Timer'
import AnswerContainer from './AnswerContainer'

const renderInProgressGame = props => {
    return <Grid centered columns={3}>
    <Grid.Column>
        <Header as='h1'>Answer the questions about this song</Header>

        <Rail position='left' style={{marginTop: '3em'}}>
            <div>
                {props.lyrics.split("\n").map(l => <p>{l}</p>)}
            </div>
        </Rail>

        <Segment>
            <Question question={props.questions[props.currentQuestion]}/>
            <NextComponent />
        </Segment>

        <Rail position='right' style={{marginTop: '3em'}}>
            <Timer />
        </Rail>
    </Grid.Column>
</Grid>
}

const isGameInProgress = props => {
    console.log('GAMEPHASE:', props.gamePhase)
    if (props.gamePhase === 'ingame') {
        console.log('now in game')
        return renderInProgressGame(props)
    } else if (props.gamePhase === 'viewingresults') {
        console.log('viewing...')
        return renderCompleteGame(props)
    } else {
        console.log('waiting for game')
        return null
    }
}

const GameContainer = props => {
    return <Container style={{marginTop: '5em'}}>
        {isGameInProgress(props)}
    </Container> 
}

const renderCompleteGame = props => {
    console.log('game results', props.results)
    return <Grid centered columns={3} verticalAlign='middle' style={{height: '100vh'}}>
        <Grid.Row>
            <Grid.Column width={3}>
                <p><strong>Album: </strong>{props.results.song.album}</p>
                <p><strong>Artist: </strong>{props.results.song.artist.name}</p>
                <p><strong>Released: </strong>{props.results.song.release_date}</p>
            </Grid.Column>
            <Grid.Column width={12}>
                <Header as='h1'>Game results</Header>
                <Header.Subheader><strong>Multiplier: </strong>{props.results.multiplier}</Header.Subheader>
                <AnswerContainer 
                    questions={props.results.questions} 
                    multiplier={props.results.multiplier}
                />
            </Grid.Column>
        </Grid.Row>
    </Grid>
}

const mapStateToProps = state => {
    return {
        ...state.game,
        gamePhase: state.gamePhase,
        results: state.gameResults
    }
}

export default connect(mapStateToProps)(GameContainer)