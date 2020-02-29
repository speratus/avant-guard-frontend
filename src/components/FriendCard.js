import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

const FriendCard = props => {
    const {id, name, username} = props.user
    return <Card>
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{username}</Card.Meta>
        </Card.Content>

        <Card.Content extra>
            <Button basic
                fluid
                onClick={() => {
                    props.history.push({
                        pathname: `/users/${id}`
                    })
                }}
            >
                View Profile
            </Button>
        </Card.Content>
    </Card>
}

export default withRouter(FriendCard)