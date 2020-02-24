import ActionTypes from './ActionTypes'

export default function(artists, genres) {
    return {
        type: ActionTypes.ADD_OPTION_DATA,
        artists,
        genres
    }
}