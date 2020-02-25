import React from 'react'
import {connect} from 'react-redux'
import { Segment, Header } from 'semantic-ui-react'

import gotoNextQuestion from '../actions/gotoNextQuestion'
import decreaseTimer from '../actions/decreaseTimer'
import resetTimer from '../actions/resetTimer'
import resetQuestionAnswer from '../actions/resetQuestionAnswer'
import stepQuestion from '../utils/stepQuestion'
import setGameResults from '../actions/setGameResults'
import nextGamePhase from '../actions/nextGamePhase'

class Timer extends React.Component {

    interval = null

    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.props.timeRemaining === 0) {
                stepQuestion(this.props)
            } else {
                this.props.decreaseTimer()
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return <Segment style={{maxWidth: '8em'}}>
            <Header as='h1' style={{fontSize: '4em'}}>{this.props.timeRemaining}</Header>
            <Header.Subheader>Seconds remaining</Header.Subheader>
        </Segment>
    }

}

const mapStateToProps = state => {
    return {
        ...state.timer,
        currentQuestion: state.game.currentQuestion,
        questionCount: state.game.questions.length,
        gameId: state.game.id,
        answer: state.game.currentAnswer,
        question: state.game.questions[state.game.currentQuestion]
    }
}

export default connect(
    mapStateToProps, 
    {
        decreaseTimer, 
        gotoNextQuestion, 
        resetTimer,
        resetQuestionAnswer,
        setGameResults,
        nextGamePhase,
    }
)(Timer)