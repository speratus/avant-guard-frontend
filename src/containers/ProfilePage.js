import React from 'react'
import {withRouter} from 'react-router-dom'
import {Container, Grid, Button, Segment} from 'semantic-ui-react'
import {connect} from 'react-redux'

import ScoresContainer from './ScoresContainer'

import {BASE_URL} from '../index'
import setProfileInfo from '../actions/setProfileInfo'
import addProfileScores from '../actions/addProfileScores'
import login from '../actions/login'
import {postNewFriendship, deleteFriendship} from '../fetches/userFetches'

class ProfilePage extends React.Component {

    componentDidMount() {
        if (!localStorage.getItem('token')) {
            this.props.history.push({
                pathname: '/'
            })
        } else {
            this.props.login()
        }

        let profileId
        console.log('props:', this.props.viewingMyProfile)
        if (this.props.viewingMyProfile) {
            console.log('Setting profileId to my Id')
            profileId = parseInt(localStorage.getItem('userId'))
        } else {
            const {userId} = this.props.match.params
            profileId = userId
        }

        console.log('The profile id is', profileId)
        fetch(BASE_URL+`/users/${profileId}/genre_scores`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Access-Token': localStorage.getItem('token')
            }
        }).then(res=> res.json()).then(scores => {
            console.log(scores)
            this.props.addProfileScores(scores)
        })

        fetch(BASE_URL+`/users/${profileId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Access-Token': localStorage.getItem('token')
            }
        }).then(res=>res.json()).then(userData => {
            console.log(userData)
            this.props.setProfileInfo(userData)
        })
    }

    determineButtonContent = () => {
        if (this.props.userId == localStorage.getItem('userId')) {
            return null
        } else {
            let {userId} = this.props.match.params
            const friendId = parseInt(userId)
            const currentUserId = parseInt(localStorage.getItem('userId'))
            // console.log(currentUserId, friendId)
            const friendIds = this.props.friendsList.map(f => f.id)
            if(friendIds.includes(friendId)) {
                return <Button 
                    primary 
                    onClick={() => (
                            deleteFriendship(currentUserId, friendId).then(message => {
                                console.log(message)
                                if (message.error) {
                                    alert(message.error)
                                } else
                                    this.props.history.push({pathname: '/friends'})
                            })
                        )}
                >
                    Unfriend
                </Button>
            }
            return <Button primary 
                onClick={() => postNewFriendship(currentUserId, friendId).then(friendship => {
                    if (friendship.id) {
                        this.props.history.push({pathname: '/friends'})
                    }
                })}
            >Add Friend</Button>
        }
    }

    render() {
        return <Container style={{marginTop: '8em', width: '100%'}}>
            <Grid centered columns={2}>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Segment style={{fontSize: '1.75em'}}>
                            <p><strong>Name:</strong> {this.props.name}</p>
                            <p><strong>Username:</strong> {this.props.username}</p>
                            {this.determineButtonContent()}
                        </Segment>
                    </Grid.Column>

                    <Grid.Column width={12}>
                        <ScoresContainer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    }

}

const mapStateToProps = state => {
    return {
        ...state.profileData,
        friendsList: state.friendsList
    }
}

export default withRouter(
    connect(
        mapStateToProps, 
        {
            setProfileInfo,
            addProfileScores,
            login
        }
    )(ProfilePage)
)