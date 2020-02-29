import ActionTypes from './ActionTypes'

export default function(userData) {
    return {
        type: ActionTypes.LOAD_USER_LIST,
        users: userData ? userData : []
    }
}