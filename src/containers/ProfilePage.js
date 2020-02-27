import React from 'react'
import {withRouter} from 'react-router-dom'
import {Container, Grid, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'

import ScoresContainer from './ScoresContainer'

import {BASE_URL} from '../index'
import setProfileInfo from '../actions/setProfileInfo'
import addProfileScores from '../actions/addProfileScores'

class ProfilePage extends React.Component {

    componentDidMount() {
        if (!localStorage.getItem('token')) {
            this.props.history.push({
                pathname: '/'
            })
        }

        const {userId} = this.props.match.params
        fetch(BASE_URL+`/users/${userId}/genre_scores`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Access-Token': localStorage.getItem('token')
            }
        }).then(res=> res.json()).then(scores => {
            console.log(scores)
            this.props.addProfileScores(scores)
        })

        fetch(BASE_URL+`/users/${userId}`, {
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
            return <Button primary basic>Settings</Button>
        } else {
            return <Button primary basic>Add Friend</Button>
        }
    }

    render() {
        return <Container style={{marginTop: '5em', width: '100%'}}>
            <Grid centered columns={2}>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <div>
                            <p><strong>Name:</strong> {this.props.name}</p>
                            <p><strong>Username:</strong> {this.props.username}</p>
                            {this.determineButtonContent()}
                        </div>
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
        ...state.profileData
    }
}

export default withRouter(
    connect(
        mapStateToProps, 
        {
            setProfileInfo,
            addProfileScores
        }
    )(ProfilePage)
)