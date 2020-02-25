import ActionTypes from './ActionTypes'

export default function(artists) {
    return {
        type: ActionTypes.ADD_OPTION_ARTISTS,
        artists
    }
}