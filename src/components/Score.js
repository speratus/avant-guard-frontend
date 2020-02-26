import React from 'react'
import { Table } from 'semantic-ui-react'

const Score = props => {
    if (props.useGenre) {
        return <React.Fragment>
            <Table.Cell>{props.score.genre.name}</Table.Cell>
            <Table.Cell>{props.score.score}</Table.Cell>
        </React.Fragment>
    } else {
        return <React.Fragment>
            <Table.Cell>{props.score.user.username}</Table.Cell>
            <Table.Cell>{props.score.total_score}</Table.Cell>
        </React.Fragment>
    }
}

export default Score