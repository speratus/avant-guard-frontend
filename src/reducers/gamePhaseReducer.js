import factory from 'easy-redux-reducers'

import nextGamePhase from '../actions/nextGamePhase'
import resetGamePhase from '../actions/resetGamePhase'

const builder = factory()

const initialState = "none"

builder.setInitialState(initialState)

builder.addAction(nextGamePhase, (state, action) => {
    switch(state) {
        case 'none':
            return "waiting"
        case 'waiting':
            return 'ingame'
        case 'ingame':
            return 'viewingresults'
        case 'viewingresults':
            return 'none'
        default:
            return 'none'
    }
})

builder.addAction(resetGamePhase, (state, action) => {
    return 'none'
})

export default builder.buildReducer()

