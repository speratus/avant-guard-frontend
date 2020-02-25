import React from 'react'
import { Grid, Header, Segment, Container, Rail } from 'semantic-ui-react'
import {connect} from 'react-redux'

import Question from '../components/Question'
import NextComponent from '../components/NextComponent'
import Timer from '../components/Timer'

const GameContainer = props => {
    return <Container style={{marginTop: '3em'}}>
        <Grid centered columns={3}>
            <Grid.Column>
                <Header as='h1'>Answer the questions about this song</Header>

                <Rail position='left' style={{marginTop: '3em'}}>
                    <div>
                        {props.lyrics}
                    </div>
                </Rail>

                <Segment>
                    <Question question={props.questions[props.currentQuestion]}/>
                    <NextComponent />
                </Segment>

                <Rail position='right' style={{marginTop: '3em'}}>
                    <Timer />
                </Rail>
            </Grid.Column>
        </Grid>
    </Container> 
}

const mapStateToProps = state => {
    return {
        ...state.game
    }
}

export default connect(mapStateToProps)(GameContainer)