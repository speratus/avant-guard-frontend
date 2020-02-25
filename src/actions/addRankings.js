import ActionTypes from './ActionTypes'

export default function(rankings) {
    return {
        type: ActionTypes.ADD_RANKINGS,
        rankings
    }
}