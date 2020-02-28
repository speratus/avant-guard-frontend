import ActionTypes from './ActionTypes'

export default function(value) {
    return {
        type: ActionTypes.UPDATE_USER_SEARCH,
        search: value
    }
}