import {ADD_GAME_DATA} from './ActionTypes'

export default function addGameData(questions, lyrics) {
    return {
        type: ADD_GAME_DATA,
        questions,
        lyrics
    }
}