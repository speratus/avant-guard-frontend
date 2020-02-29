import factory from 'redux-reducer-builder'

import loadFriendsList from '../actions/loadFriendsList'

const initialState = []

const builder = factory()

builder.setInitialState(initialState)

builder.addAction(loadFriendsList, (state, action) => action.friends ? action.friends : state)

export default builder.buildReducer()