import generator from 'redux-reducer-builder'

import addRankings from '../actions/addRankings'

const builder = generator()

let initialState = []

builder.setInitialState(initialState)

builder.addAction(addRankings, (state, action) => {
    if (action.rankings)
        return action.rankings
    else
        return state
})

export default builder.buildReducer()