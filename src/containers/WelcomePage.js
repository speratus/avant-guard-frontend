import React from 'react'

import {withRouter} from 'react-router-dom'

const WelcomePage = props => {
    if (!localStorage.getItem('token')) {
        props.history.push({
            pathname: "/login",
            state: {
                loggedIn: false
            }
        })
    }
    return null
}

export default withRouter(WelcomePage)