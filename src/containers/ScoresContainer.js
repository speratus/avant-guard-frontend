import React from 'react'
import {Header, Container} from 'semantic-ui-react'

import ScoresTable from './ScoresTable'

const ScoresContainer = props => {
    return <Container>
        <Header as='h1'>Top Genres:</Header>
        <ScoresTable />
    </Container>
}

export default ScoresContainer