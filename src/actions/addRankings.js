import ActionTypes from './ActionTypes'

export default function(rankings) {
    console.log("rankings", rankings)
    return {
        type: ActionTypes.ADD_RANKINGS,
        rankings
    }
}