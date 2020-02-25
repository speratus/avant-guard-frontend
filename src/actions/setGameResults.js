import ActionTypes from './ActionTypes'

export default function(results) {
    // console.log('setting results to', results)
    return {
        type: ActionTypes.SET_GAME_RESULTS,
        results
    }
}