import React from 'react'
import { Segment, Search } from 'semantic-ui-react'
import {connect} from 'react-redux'

import loadUserData from '../actions/loadUserData'

class SearchBox extends React.Component {


    render() {
        return <Segment fluid>
            <Header as='h1'>Search for Friends</Header>
            <Search />
        </Segment>
    }
}

const mapStateToProps = state => {
    return {
        userList: state.userList
    }
}

export default connect(
    mapStateToProps,
    {
        loadUserList: loadUserData
    }
)(SearchBox)