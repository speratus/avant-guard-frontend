import React from 'react'
import {connect} from 'react-redux'
import { Segment, Header } from 'semantic-ui-react'

import gotoNextQuestion from '../actions/gotoNextQuestion'
import decreaseTimer from '../actions/decreaseTimer'
import resetTimer from '../actions/resetTimer'
import resetQuestionAnswer from '../actions/resetQuestionAnswer'

class Timer extends React.Component {

    interval = null

    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.props.timeRemaining === 0) {
                this.props.resetQuestionAnswer()
                this.props.resetTimer()
                this.props.gotoNextQuestion()
            } else {
                this.props.decreaseTimer()
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return <Segment style={{maxWidth: '8em'}}>
            <Header as='h1' style={{fontSize: '4em'}}>{this.props.timeRemaining}</Header>
            <Header.Subheader>Seconds remaining</Header.Subheader>
        </Segment>
    }

}

const mapStateToProps = state => {
    return {
        ...state.timer
    }
}

export default connect(
    mapStateToProps, 
    {
        decreaseTimer, 
        gotoNextQuestion, 
        resetTimer,
        resetQuestionAnswer
    }
)(Timer)