import ActionTypes from './ActionTypes'

export default function(genre) {
    return {
        type: ActionTypes.SELECT_GENRE,
        genre
    }
}