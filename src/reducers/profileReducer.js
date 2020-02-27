import factory from 'redux-reducer-builder'

import setProfileInfo from '../actions/setProfileInfo'

const builder = factory()

const initialState = {
    userId: 0,
    name: '',
    username: ''
}

builder.setInitialState(initialState)

builder.addAction(setProfileInfo, (state, action) => {
    if (action.profile) {
        const {id, name, username} = action.profile
        return {
            userId: id,
            name,
            username
        }
    }
    return {
        ...initialState
    }
})


export default builder.buildReducer()