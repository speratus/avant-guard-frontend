import ActionTypes from './ActionTypes'

export default function(artist) {
    return {
        type: ActionTypes.SELECT_ARTIST,
        artist
    }
}