import axios from 'axios'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'



const initState = {
    isAuth: false,
    name: 'ZhangZeyan',
    age: 22
}

export function auth(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, isAuth: true}
        case LOGOUT:
            return {...state, isAuth: false}
        case USER_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export function login() {
    return {type: LOGIN}
}


export function logout() {
    return {type: LOGOUT}
}

export function userData(data) {
    return {type: USER_DATA, payload: data}
}

export function getUserData() {
    return dispatch => {
        axios.get('./simple_user/search_first')
            .then(res => {
                if (res.status === 200) {
                    dispatch(userData(res.data))
                }
                console.log(res)
            })
    }
}