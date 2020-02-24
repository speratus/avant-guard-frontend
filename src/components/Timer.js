import React from 'react'
import {connect} from 'react-redux'

import decreaseTimer from '../actions/decreaseTimer'
import { Segment, Header } from 'semantic-ui-react'

class Timer extends React.Component {

    interval = null

    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.decreaseTimer()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return <Segment>
            <Header as='h1'>{this.props.timeRemaining}</Header>
            <Header.Subheader>Seconds remaining</Header.Subheader>
        </Segment>
    }

}

const mapStateToProps = state => {
    return {
        ...state.timer
    }
}

export default connect(mapStateToProps, {decreaseTimer})(Timer)