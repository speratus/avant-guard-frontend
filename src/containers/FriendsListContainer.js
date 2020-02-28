import React from 'react'
import {connect} from 'react-redux'

import loadFriendsList from '../actions/loadFriendsList'
import {getFriends} from '../fetches/userFetches'

class FriendsListContainer extends React.Component {

    componentDidMount() {
        getFriends().then(friends => {
            console.log(friends)
            this.props.loadFriendsList(friends)
        })
    }
}

const mapStateToProps = state => {
    return {
        friendsList: state.friendsList
    }
}

export default connect(
    mapStateToProps,
    {
        loadFriendsList
    }
)(FriendsListContainer)