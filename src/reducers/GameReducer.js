import generator from 'redux-reducer-builder'

import gotoNextQuestion from '../actions/gotoNextQuestion'
import addGameData from '../actions/addGameData'
import resetGameState from '../actions/resetGameState'
import updateGameAnswer from '../actions/updateQuestionAnswer'
import resetQuestionAnswer from '../actions/resetQuestionAnswer'

const builder = generator()

let initialState = {
    currentQuestion: 0,
    questions: [],
    lyrics: "",
    currentAnswer: "",
    id: 0,
    multiplier: 0,
    clip: ''
}

builder.setInitialState(initialState)

builder.addAction(gotoNextQuestion, (state, action) => {
    return {
        ...state,
        currentQuestion: state.currentQuestion + 1
    }
})

builder.addAction(addGameData, (state, action) => {
    return {
        ...state,
        questions: action.questions,
        lyrics: action.lyrics,
        id: action.id,
        multiplier: action.multiplier
    }
})

builder.addAction(resetGameState, (state, action) => {
    return {
        ...initialState
    }
})

builder.addAction(updateGameAnswer, (state, action) => {
    return {
        ...state,
        currentAnswer: action.answer
    }
})

builder.addAction(resetQuestionAnswer, (state, action) => {
    return {
        ...state,
        currentAnswer: ''
    }
})

export default builder.buildReducer()