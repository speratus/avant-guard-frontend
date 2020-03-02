import {BASE_URL} from '../index'

export function constructGame(seed) {
    return fetch(BASE_URL+'/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Token': localStorage.getItem('token')
        },
        body: JSON.stringify({
            game: {
                ...seed
            }
        })
    }).then(res=>res.json())
}