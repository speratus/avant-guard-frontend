import React from 'react'
import {withRouter} from 'react-router-dom'
import {Container, Grid} from 'semantic-ui-react'
import {connect} from 'react-redux'

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

    render() {
        return <Container style={{marginTop: '3em'}}>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column width={2}>

                    </Grid.Column>

                    <Grid.Column width={8}>

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