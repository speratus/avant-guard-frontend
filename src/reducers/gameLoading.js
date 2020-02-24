import generate from 'redux-reducer-builder'

import inGame from '../actions/inGame'
import waitingForGame from '../actions/waitingForGame'

const builder = generate()

const initialState = {
    waitingForGame: false,
    inGame: false
}

builder.setInitialState(initialState)

builder.addAction(inGame, (state, action) => {
    return {
        ...state,
        inGame: !state.inGame
    }
})

builder.addAction(waitingForGame, (state, action) => {
    return {
        ...state,
        waitingForGame: !state.waitingForGame
    }
})

export default builder.buildReducer()