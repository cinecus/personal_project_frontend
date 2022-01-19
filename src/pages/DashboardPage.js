import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/app_context'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import axios from "axios";

const DashboardPage = () => {
    const { Logout, } = useAppContext()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [user_info, setUserInfo] = useState({
        first_name: '',
        last_name: ''
    })
    const handleLogout = async () => {
        Logout()
        navigate('/authen')
    }
    useEffect(() => {
        setLoading(true)
        const getUserInfo = async () => {
            try {
                const config = {
                    method: 'get',
                    url: 'http://localhost:8000/api/v1/fefu/auth/getUserInfo',
                    headers: { Authorization: localStorage.getItem('token') }
                }
                axios(config).then((res) => {
                    setUserInfo(res.data.result.user)
                    setLoading(false)
                })
                    .catch((err) => {
                        console.log(err)
                    })

            } catch (error) {
                console.log(error);
            }
        }
        getUserInfo()
    }, [])
    // console.log(user_info)
    return loading ?
        <Loading />
        : (
            <>
                <div>
                    Hi {user_info.first_name} {user_info.last_name}
                </div>
                <button onClick={handleLogout}>log out</button>
            </>
        )
}

export default DashboardPage
