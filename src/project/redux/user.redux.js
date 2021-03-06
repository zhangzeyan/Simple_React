import axios from 'axios'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
    isAuth: false,
    msg: '',
    user: '',
    pwd: '',
    type: ''
}


export function user(state = initState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {...state, msg: '', isAuth: true, ...action.payload}
        case ERROR_MSG:
            return {...state, isAuth: false, msg: action.msg}
        default:
            return state
    }
}

function registerSuccess(data) {
    return {type: REGISTER_SUCCESS, payload: data}
}

function loginSuccess(data) {
    return {type: LOGIN_SUCCESS, payload: data}
}

function authSuccess(data) {
    return {type: AUTH_SUCCESS, payload: data}
}

function errorMsg(msg) {
    return {msg, type: ERROR_MSG}
}

export function register({user, pwd, repeatPwd, type}) {
    if (!user || !pwd || !type) {
        return errorMsg('用户名密码必须输入')
    }
    if (pwd !== repeatPwd) {
        return errorMsg('密码和确认密码必须一致')
    }

    return dispatch => {
        axios.post('/user/register', {user, pwd, type})
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(registerSuccess({user, pwd, type}))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }

}

export function update(data) {
    return dispatch => {
        axios.post('/user/update', data)
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(authSuccess({data}))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }

}