import ActionTypes from './ActionTypes'

export default function addGameData(questions, lyrics, id, multiplier) {
    return {
        type: ActionTypes.ADD_GAME_DATA,
        questions,
        lyrics,
        id,
        multiplier
    }
}