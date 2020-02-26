import ActionTypes from './ActionTypes'

export default function(type) {
    return {
        type: ActionTypes.CHANGE_GAME_TYPE,
        gameType: type
    }
}