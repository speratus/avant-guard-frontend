import React from 'react'
import {Table} from 'semantic-ui-react'
import {connect} from 'react-redux'

import Score from '../components/Score'

const ScoresTable = props => {
    return <Table celled>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Genre</Table.HeaderCell>
                <Table.HeaderCell>Score</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                props.scores.map(s => {
                    return <Table.Row>
                        <Score useGenre score={s} />
                    </Table.Row>
                })
            }
        </Table.Body>
    </Table>
}

const mapStateToProps = state => {
    return {
        scores: state.profileData.scores
    }
}

export default connect(mapStateToProps)(ScoresTable)