import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import {connect} from 'react-redux'

import updateQuestionAnswer from '../actions/updateQuestionAnswer'
import {BASE_URL} from '../index'
import gotoNextQuestion from '../actions/gotoNextQuestion'
import resetTimer from '../actions/resetTimer'
import resetQuestionAnswer from '../actions/resetQuestionAnswer'
import stepQuestion from '../utils/stepQuestion'
import setGameResults from '../actions/setGameResults'
import nextGamePhase from '../actions/nextGamePhase'
import resetGameState from '../actions/resetGameState'

const NextComponent = props => {
    // console.log(props.answer)
    return <Form onSubmit={
        e => {
            e.preventDefault()
            stepQuestion(props)
        }
    }>
        <Form.Input 
            onChange={e=> props.updateQuestionAnswer(e.target.value)} 
            value={props.answer}
        />
        <Button primary >Next Question</Button>
        <label>Question {props.currentQuestion+1} of {props.questionCount}</label>
    </Form>
}

const mapStateToProps = state => {
    return {
        currentQuestion: state.game.currentQuestion,
        questionCount: state.game.questions.length,
        question: state.game.questions[state.game.currentQuestion],
        answer: state.game.currentAnswer,
        gameId: state.game.id
    }
}

export default connect(
    mapStateToProps,
    {
        updateQuestionAnswer,
        gotoNextQuestion,
        resetTimer,
        resetQuestionAnswer,
        setGameResults,
        nextGamePhase,
        resetGameState
    }
)(NextComponent)