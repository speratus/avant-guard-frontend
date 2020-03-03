import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import {connect} from 'react-redux'

import LeaderboardTable from './LeaderboardTable'
import {BASE_URL} from '../index'
import addRankings from '../actions/addRankings'

class LeaderboardCard extends React.Component {

    componentDidMount() {
        fetch(BASE_URL+'/rankings').then(res=>res.json())
            .then(rankings => {
                console.log(rankings)
                this.props.addRankings(rankings)
            })
    }

    render() {
        return <Segment>
            <Header as='h1'>Leaderboards:</Header>
            <LeaderboardTable rankings={this.props.rankings}/>
        </Segment>
    }
}

const mapStateToProps = state => {
    return {
        rankings: state.rankings
    }
}

export default connect(mapStateToProps, {addRankings})(LeaderboardCard)