import factory from 'easy-redux-reducers'

import loadUserData from '../actions/loadUserData'
import updateUserSearch from '../actions/updateUserSearch'

const initialState = {
    users: [],
    search: ''
}

const builder = factory()

builder.setInitialState(initialState)

builder.addAction(loadUserData, (state, action) => {
    return {
        ...state,
        users: action.users
    }
})

builder.addAction(updateUserSearch, (state, action) => {
    return {
        ...state,
        search: action.search
    }
})

export default builder.buildReducer()