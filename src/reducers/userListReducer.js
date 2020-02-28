import factory from 'redux-reducer-builder'

import loadUserData from '../actions/loadUserData'

const initialState = []

const builder = factory()

builder.setInitialState(initialState)

builder.addAction(loadUserData, (state, action) => {
    return action.users
})

export default builder.buildReducer()