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