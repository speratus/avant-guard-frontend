import ActionTypes from './ActionTypes'

export default function(genres) {
    return {
        type: ActionTypes.ADD_OPTION_GENRES,
        genres
    }
}