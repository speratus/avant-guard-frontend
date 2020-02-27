import ActionTypes from './ActionTypes'

export default function(scores) {
    return {
        type: ActionTypes.ADD_PROFILE_SCORES,
        scores
    }
}