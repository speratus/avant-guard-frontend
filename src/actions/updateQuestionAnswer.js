import ActionTypes from './ActionTypes'

export default function(answer) {
    console.log('the answer is:', answer)
    return {
        type: ActionTypes.UPDATE_QUESTION_ANSWER,
        answer: answer
    }
}