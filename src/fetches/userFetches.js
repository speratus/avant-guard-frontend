import {BASE_URL} from '../index'


export function fetchUserList() {
    return fetch(BASE_URL+'/users', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Access-Token': localStorage.getItem('token')
        }
    }).then(res=>res.json())
}

export function postNewFriendship(userId, friendId) {
    return fetch(BASE_URL+'/friendships', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Token': localStorage.getItem('token')
        },
        body: JSON.stringify({
            friender_id: userId,
            friended_id: friendId
        })
    }).then(res=>res.json())
}