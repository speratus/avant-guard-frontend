import builder from 'redux-reducer-builder'

import login from '../actions/login'
import logout from '../actions/logout'

builder.setInitialState(false)

builder.addAction(login, (state, action) => {
    return true
})

builder.addAction(logout, (state, action) => false)

export default builder.buildReducer()