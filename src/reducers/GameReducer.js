import builder from 'redux-reducer-builder'

import gotoNextQuestion from '../actions/gotoNextQuestion'
import addQuestions from '../actions/addQuestions'
import resetGameState from '../actions/resetGameState'

let initialState = {
    currentQuestion: 0,
    questions: []
}

builder.setInitialState(initialState)

builder.addAction(gotoNextQuestion, (state, action) => {
    return {
        ...state,
        currentQuestion: state.currentQuestion + 1
    }
})

builder.addAction(addQuestions, (state, action) => {
    return {
        ...state,
        questions: action.questions
    }
})

builder.addAction(resetGameState, (state, action) => {
    return {
        ...initialState
    }
})

export default builder.buildReducer()