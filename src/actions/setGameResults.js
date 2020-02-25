import ActionTypes from './ActionTypes'

export default function(results) {
    return {
        type: ActionTypes.SET_GAME_RESULTS,
        results
    }
}