import React from 'react'
import {connect} from 'react-redux'

import loadFriendsList from '../actions/loadFriendsList'
import {getFriends} from '../fetches/userFetches'

import FriendCard from '../components/FriendCard'
import { Container, Grid, Header } from 'semantic-ui-react'

class FriendsListContainer extends React.Component {

    componentDidMount() {
        getFriends().then(friends => {
            console.log(friends)
            this.props.loadFriendsList(friends)
        })
    }

    render() {
        return <Container style={{marginTop: '8em'}}>
            <Header as='h1' style={{fontSize: '3em'}}>Friends</Header>
            <Grid columns={5}>
                <Grid.Row>
                    {
                        this.props.friendsList.map((f, i) => (
                            <Grid.Column key={i}>
                                <FriendCard user={f} />
                            </Grid.Column>
                        ))
                    }
                </Grid.Row>
            </Grid>
        </Container>
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