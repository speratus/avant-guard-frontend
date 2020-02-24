import {ADD_QUESTIONS} from './ActionTypes'

export default function addQuestions(questions) {
    return {
        type: ADD_QUESTIONS,
        questions
    }
}