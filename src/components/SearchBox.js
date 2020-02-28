import React from 'react'
import { Segment, Search, Header } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import loadUserData from '../actions/loadUserData'
import updateUserSearch from '../actions/updateUserSearch'
import {fetchUserList} from '../fetches/userFetches'

class SearchBox extends React.Component {

    componentDidMount() {
        fetchUserList().then(users => {
            console.log('user list:', users)
            this.props.loadUserList(users)
        })
    }

    filterUsersBySearch = () => {
        let regex = new RegExp(this.props.search, 'i')

        const matches = this.props.users.filter(u => {
            return !!u.name.match(regex) || !!u.username.match(regex)
        })

        const formatted = matches.map(u => {
            return {
                id: u.id,
                title: u.name,
                description: u.username
            }
        })
        return formatted
    }

    onResultSelect = (e, {result}) => {
        this.props.updateUserSearch('')
        this.props.history.push({
            pathname: `/users/${result.id}`
        })
    }

    render() {
        return <Segment fluid>
            <Header as='h1'>Search for Friends</Header>
            <Search 
                onSearchChange={(e, {value}) => this.props.updateUserSearch(value)}
                onResultSelect={this.onResultSelect}
                value={this.props.search}
                results={this.filterUsersBySearch()}
            />
        </Segment>
    }
}

const mapStateToProps = state => {
    return {
        ...state.userList
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        {
            loadUserList: loadUserData,
            updateUserSearch
        }
    )(SearchBox)
)