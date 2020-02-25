import React from 'react'

import Score from '../components/Score'
import { Table } from 'semantic-ui-react'

const LeaderboardTable = props => {
    return <Table celled>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>User</Table.HeaderCell>
                <Table.HeaderCell>Score</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        
        <Table.Body>
            {
                props.rankings.map((r,i) => {
                    return <Table.Row key={i}>
                        <Score score={r} />
                    </Table.Row>
                })
            }
        </Table.Body>
    </Table>
}

export default LeaderboardTable