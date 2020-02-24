import generator from 'redux-reducer-builder'

import gotoNextQuestion from '../actions/gotoNextQuestion'
import addGameData from '../actions/addGameData'
import resetGameState from '../actions/resetGameState'

const builder = generator()

let initialState = {
    currentQuestion: 0,
    questions: [],
    lyrics: ""
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
        lyrics: action.lyrics
    }
})

builder.addAction(resetGameState, (state, action) => {
    return {
        ...initialState
    }
})

export default builder.buildReducer()