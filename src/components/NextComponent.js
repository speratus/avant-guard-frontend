import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import {connect} from 'react-redux'

const NextComponent = props => {
    return <Form>
        <Input />
        <Button primary >Next Question</Button>
        <label>Question {props.currentQuestion+1} of {props.questionCount}</label>
    </Form>
}

const mapStateToProps = state => {
    return {
        currentQuestion: state.game.currentQuestion,
        questionCount: state.game.questions.length
    }
}

export default connect(mapStateToProps)(NextComponent)