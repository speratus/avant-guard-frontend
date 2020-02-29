import React from 'react'
import {connect} from 'react-redux'
import {Header, Button, Search, Container} from 'semantic-ui-react'

import selectArtist from '../actions/selectArtist'
import selectGenre from '../actions/selectGenre'
import changeGameType from '../actions/changeGameType'
import addOptionArtists from '../actions/addOptionArtists'
import addOptionGenres from '../actions/addOptionGenres'

import {BASE_URL} from '../index'

class ChallengeSelector extends React.Component {
    state = {
        results: [],
        searchTerm: ''
    }
    
    handleSearchChanged = (e, {value}) => {
        const searchList = this.props.gameType
        let regex = RegExp(`^${value}`, 'i')
        const results = this.props[searchList].filter(e => !!e.match(regex))
        const data = results.map(r=>{
            return {
                title: r
            }
        })
        this.setState({results: data, searchTerm: value})
    }

    componentDidMount() {
        fetch(BASE_URL+'/genres', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Access-Token': localStorage.getItem('token')
            }
        }).then(res=>res.json()).then(genres => {
            // console.log(genres)
            const genreNames = genres.map(g => g.name)
            this.props.addOptionGenres(genreNames)
        })

        fetch(BASE_URL+'/artists', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Access-Token': localStorage.getItem('token')
            }
        }).then(res=>res.json()).then(artists => {
            // console.log(artists)
            const artistNames = artists.map(a=>a.name)
            this.props.addOptionArtists(artistNames)
        })
    }

    handleResultSelect = (e, {result}) => {
        switch(this.props.gameType) {
            case 'genres':
                this.props.selectGenre(result.title)
                break
            case 'artists':
                this.props.selectArtist(result.title)
                break
            default:
                this.props.selectGenre(result.title)
        }
        this.setState({searchTerm: result.title})
    }

    handleGameTypeChanged = e => {
        this.props.changeGameType(e.target.name)
    }

    render() {
        return <Container>
            <Header.Subheader as='h1'>Select Genre or Artist</Header.Subheader>
            <Button.Group>
                <Button 
                    name='genres'
                    onClick={this.handleGameTypeChanged}
                    active={this.props.gameType === 'genres'}
                >Genre</Button>
                <Button 
                    name='artists'
                    onClick={this.handleGameTypeChanged}
                    active={this.props.gameType === 'artists'}
                >Artist</Button>
            </Button.Group>
            <Search 
                onResultSelect={this.handleResultSelect}
                onSearchChange={this.handleSearchChanged}
                results={this.state.results}
                value={this.state.searchTerm}
            />
        </Container>
    }
}

const mapStateToProps = state => {
    return {
        ...state.gameOptions
    }
}

export default connect(mapStateToProps, {
    selectArtist, 
    selectGenre, 
    changeGameType,
    addOptionArtists,
    addOptionGenres
})(ChallengeSelector)