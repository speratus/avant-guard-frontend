import generator from 'easy-redux-reducers'

import login from '../actions/login'
import logout from '../actions/logout'

const builder = generator()

builder.setInitialState(false)

builder.addAction(login, (state, action) => {
    return true
})

builder.addAction(logout, (state, action) => false)

export default builder.buildReducer()