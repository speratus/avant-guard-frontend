import generator from 'easy-redux-reducers'

import changeGameType from '../actions/changeGameType'
import selectArtist from '../actions/selectArtist'
import selectGenre from '../actions/selectGenre'
import addOptionArtists from '../actions/addOptionArtists'
import addOptionGenres from '../actions/addOptionGenres'

const builder = generator()

const initialState = {
    artists: [],
    genres: [],
    gameType: 'genres',
    selectedArtist: '',
    selectedGenre: ''
}

builder.setInitialState(initialState)

builder.addAction(addOptionArtists, (state, action) => {
    return {
        ...state,
        artists: action.artists
    }
})

builder.addAction(addOptionGenres, (state, action) => {
    return {
        ...state,
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