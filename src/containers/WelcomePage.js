import React from 'react'

import {withRouter} from 'react-router-dom'

const WelcomePage = props => {
    if (!localStorage.getItem('token')) {
        props.history.push({
            pathname: "/login"
        })
    }
    return <h1>Hello World</h1>
}

export default withRouter(WelcomePage)