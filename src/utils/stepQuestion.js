import {BASE_URL} from '../index'

export default function(props) {
    if (props.currentQuestion < props.questionCount - 1) {
        props.resetQuestionAnswer()
        props.resetTimer()
        props.gotoNextQuestion()
    } else {
        fetch(BASE_URL+`/games/${props.gameId}`, {
            method: 'PATCH',
            headers: {
                Accept: 'applicatin/json',
                'Access-Token': localStorage.getItem('token')
            }
        }).then(res=>res.json()).then(gameData => {
            //Fill this out!
        })
    }
}