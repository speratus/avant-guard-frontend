import factory from 'redux-reducer-builder'

const builder = factory()

const initialState = {
    userId: 0,
    name: '',
    username: ''
}

builder.setInitialState(initialState)


export default builder.buildReducer()