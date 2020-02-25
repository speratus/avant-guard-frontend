import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const questionTypes = {
    y: 'What year was this song written in?',
    al: 'What is the name of the album in which this song appears?',
    ar: 'Who wrote/performed this song?',
    t: 'What is the name of this song?'
}

const renderAsQuestion = (props) => {
    if (props.asAnswer) {

    } else {
        console.log('displaying a question and not the answer')
        console.log('The question is', props.question)
        return <Header>{questionTypes[props.question.question_type]}</Header>
    }
}

const Question = props => {
    return <Container>
        {renderAsQuestion(props)}
    </Container>
}

export default Question