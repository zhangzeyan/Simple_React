//合并所有的reducer, 并且返回
import {combineReducers} from 'redux'
import {counter} from './ReduxApp.redux'
import {auth} from './Auth.Redux'

export default combineReducers({counter,auth})