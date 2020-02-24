import ActionTypes from './ActionTypes'

export default function addGameData(questions, lyrics) {
    return {
        type: ActionTypes.ADD_GAME_DATA,
        questions,
        lyrics
    }
}