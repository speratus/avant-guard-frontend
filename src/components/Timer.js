import React from 'react'
import {connect} from 'react-redux'
import { Segment, Header } from 'semantic-ui-react'

import gotoNextQuestion from '../actions/gotoNextQuestion'
import decreaseTimer from '../actions/decreaseTimer'

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
        if (this.props.timeRemaining === 0) {
            this.props.gotoNextQuestion()
        }
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

export default connect(mapStateToProps, {decreaseTimer, gotoNextQuestion})(Timer)