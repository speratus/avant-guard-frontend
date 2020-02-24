import generate from 'redux-reducer-builder'

import decreaseTimer from '../actions/decreaseTimer'
import resetTimer from '../actions/resetTimer'

const builder = generate()

const initialState = {
    timeRemaining: 20
}

builder.setInitialState(initialState)

builder.addAction(decreaseTimer, (state, action) => {
    return {
        timeRemaining: state.timeRemaining-1
    }
})

builder.addAction(resetTimer, (state, action) => {
    return {
        ...initialState
    }
})

export default builder.buildReducer()