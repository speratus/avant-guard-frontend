import React from 'react'
import { Segment, Search } from 'semantic-ui-react'

class SearchBox extends React.Component {


    render() {
        return <Segment fluid>
            <Header as='h1'>Search for Friends</Header>
            <Search />
        </Segment>
    }
}

export default SearchBox