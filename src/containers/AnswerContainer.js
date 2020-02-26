import React from 'react'
import { Table } from 'semantic-ui-react'

const mapQuestionToCell = question => {
    return <Table.Row>
        <Table.Cell>{question.input}</Table.Cell>
        <Table.Cell>{question.answer}</Table.Cell>
    </Table.Row>
}

const AnswerContainer = props => {
    return <Table celled>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Your Answer</Table.HeaderCell>
                <Table.HeaderCell>Correct Answer</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {
                props.questions.map(q => mapQuestionToCell(q))
            }
        </Table.Body>
    </Table>
}

export default AnswerContainer