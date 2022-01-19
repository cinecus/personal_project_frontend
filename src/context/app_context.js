import axios from "axios";
import React, { useCallback, useContext, useEffect, useReducer, useState } from "react";
import reducer from '../reducers/app_reducer'
import Cookies from 'js-cookie'

import {
    ACTION_NAME
} from '../actions'

const initialState = {
    data_loading: false,
    user_id: '',
    token: '',
    isAuthenticated: false,
    message: '',
    user_info: null
}

const AppContext = React.createContext()


export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchAPI = async () => {
        try {

        } catch (error) {
            console.log(error)
        }
    }
    const Register = async (obj) => {
        const config = {
            method: 'post',
            url: 'http://localhost:8000/api/v1/fefu/auth/register',
            data: obj
        }
        const RegisterAPI = async () => {
            axios(config).then((res) => {
                localStorage.setItem('user_id', res.data.result.user._id)
                localStorage.setItem('token', res.data.result.token_id)
                dispatch({ type: 'REGISTER', payload: res.data.result })
            })
                .catch((err) => {
                    console.log(err)
                    dispatch({ type: 'ERROR' })
                })
        }
        await RegisterAPI()
    }
    const Login = async (obj) => {
        const config = {
            method: 'post',
            url: 'http://localhost:8000/api/v1/fefu/auth/login',
            data: obj
        }
        const loginAPI = async () => {
            axios(config)
                .then((res) => {
                    localStorage.setItem('user_id', res.data.result.user._id)
                    localStorage.setItem('token', res.data.result.token_id)
                    dispatch({ type: 'LOGIN', payload: res.data.result })
                })
                .catch((err) => {
                    console.log(err)
                    dispatch({ type: 'ERROR' })
                })
        }
        await loginAPI()
    }

    const Logout = async () => {
        localStorage.removeItem("user_id")
        localStorage.removeItem("token")
    }

    const getUserInfo = async () => {
        try {
            const config = {
                method: 'get',
                url: 'http://localhost:8000/api/v1/fefu/auth/getUserInfo',
                headers: { Authorization: localStorage.getItem('token') }
            }
            axios(config).then((res) => {
                dispatch({ type: 'GET_USER_INFO', payload: res.data.result })
            })
                .catch((err) => {
                    console.log(err)
                    dispatch({ type: 'ERROR' })
                })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AppContext.Provider value={{ ...state, fetchAPI, Register, Login, Logout, getUserInfo, data, }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}