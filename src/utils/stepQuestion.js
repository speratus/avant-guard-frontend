import {BASE_URL} from '../index'

const submit = (answer, question) => {
    fetch(BASE_URL+`/questions/${question.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Token': localStorage.getItem('token')
        },
        body: JSON.stringify({
            question: {
                answer: answer
            }
        })
    }).then(res=>res.json()).then(console.log)
}

export default function(props) {
    submit(props.answer, props.question)
    if (props.currentQuestion < props.questionCount - 1) {
        props.resetQuestionAnswer()
        props.resetTimer()
        props.gotoNextQuestion()
    } else {
        fetch(BASE_URL+`/games/${props.gameId}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Access-Token': localStorage.getItem('token')
            }
        }).then(res=>res.json()).then(gameData => {
            console.log(gameData)
            //Fill this out!
            props.setGameResults(gameData)
            props.nextGamePhase()
        })
    }
}