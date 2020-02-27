import React from 'react'

import {BASE_URL} from '../index'

class ProfilePage extends React.Component {

    componentDidMount() {
        const {userId} = this.props.match.params
        fetch(BASE_URL+`/users/${userId}/genre_scores`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Access-Token': localStorage.getItem('token')
            }
        }).then(res=> res.json()).then(scores => {
            console.log(scores)
        })
    }

}

export default ProfilePage