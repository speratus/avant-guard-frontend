import React from 'react'

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import logout from '../actions/logout'

const WelcomePage = props => {
    if (!localStorage.getItem('token')) {
        props.logout()
        props.history.push({
            pathname: "/login"
        })
    }
    return <h1>Hello World</h1>
}

export default withRouter(connect(null, {logout})(WelcomePage))