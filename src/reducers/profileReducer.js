import factory from 'easy-redux-reducers'

import setProfileInfo from '../actions/setProfileInfo'
import addProfileScores from '../actions/addProfileScores'

const builder = factory()

const initialState = {
    userId: 0,
    name: '',
    username: '',
    scores: []
}

builder.setInitialState(initialState)

builder.addAction(setProfileInfo, (state, action) => {
    if (action.profile) {
        const {id, name, username} = action.profile
        return {
            ...state,
            userId: id,
            name,
            username
        }
    }
    return {
        ...initialState
    }
})

builder.addAction(addProfileScores, (state, action) => {
    return {
        ...state,
        scores: action.scores
    }
})


export default builder.buildReducer()