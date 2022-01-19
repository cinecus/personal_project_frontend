import {
    ACTION_NAME
} from '../actions'

const app_reducer = (state, action) => {
    if (action.type === 'LOGIN') {
        return { ...state, user_id: action.payload.user._id, token: action.payload.token_id, message: 'Login success', isAuthenticated: true }
    }
    if (action.type === 'REGISTER') {
        return { ...state, user_id: action.payload.user._id, token: action.payload.token_id, message: 'Register success', isAuthenticated: true }
    }
    if (action.type === 'GET_USER_INFO') {
        return { ...state, user_info: action.payload }
    }
    if (action.type === 'ERROR') {
        return { ...state, message: 'please check your username and password' }
    }
    return state
}

export default app_reducer