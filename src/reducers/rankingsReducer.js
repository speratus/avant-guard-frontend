import generator from 'redux-reducer-builder'

import addRankings from '../actions/addRankings'

const builder = generator()

let initialState = []

builder.setInitialState(initialState)

builder.addAction(addRankings, (state, action) => {
    return action.rankings
})

export default builder.buildReducer()