import generator from 'redux-reducer-builder'

import addOptionData from '../actions/addOptionData'
import changeGameType from '../actions/changeGameType'
import selectArtist from '../actions/selectArtist'
import selectGenre from '../actions/selectGenre'

const builder = generator()

const initialState = {
    artists: [],
    genres: [],
    gameType: 'genres',
    selectedArtist: '',
    selectedGenre: ''
}

builder.setInitialState(initialState)

builder.addAction(addOptionData, (state, action) => {
    return {
        ...state,
        artists: action.artists,
        genres: action.genres
    }
})

builder.addAction(changeGameType, (state, action) => {
    return {
        ...state,
        gameType: action.gameType
    }
})

builder.addAction(selectArtist, (state, action) => {
    return {
        ...state,
        selectedArtist: action.artist
    }
})

builder.addAction(selectGenre, (state, action) => {
    return {
        ...state,
        selectedGenre: action.genre
    }
})

export default builder.buildReducer()