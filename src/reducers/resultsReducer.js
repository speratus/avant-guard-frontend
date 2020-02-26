import factory from 'redux-reducer-builder'

import setGameResults from '../actions/setGameResults'

const builder = factory()

const initialState = {
    mutliplier: 0,
    final_score: 0,
    questions: [],
    song: {}
}

builder.setInitialState(initialState)

builder.addAction(setGameResults, (state, action) => {
    return {
        ...action.results
    }
})

export default builder.buildReducer()