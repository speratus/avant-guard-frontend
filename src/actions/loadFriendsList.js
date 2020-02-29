import ActionTypes from './ActionTypes'

export default function(friends) {
    return {
        type: ActionTypes.LOAD_FRIENDS_LIST,
        friends
    }
}