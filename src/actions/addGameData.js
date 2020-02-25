import ActionTypes from './ActionTypes'

export default function addGameData(questions, lyrics, id) {
    return {
        type: ActionTypes.ADD_GAME_DATA,
        questions,
        lyrics,
        id,
        multiplier
    }
}