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
    console.log(userId, friendId)
    const data = {
        friendship: {
            friended_id: friendId
        }
    }
    console.log('sending:', data)
    return fetch(BASE_URL+`/users/${userId}/friendships`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Token': localStorage.getItem('token')
        },
        body: JSON.stringify(data)
    }).then(res=>res.json())
}

export function getFriends() {
    return fetch(BASE_URL+`/users/${localStorage.getItem('userId')}/friends`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Access-Token': localStorage.getItem('token')
        }
    }).then(res=>res.json())
}

export function deleteFriendship(userId, friendId) {
    return fetch(BASE_URL+`/users/${userId}/friendships/${friendId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Access-Token': localStorage.getItem('token')
        }
    }).then(res=>res.json())
}