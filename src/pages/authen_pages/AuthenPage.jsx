import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaUserAlt, FaKey } from 'react-icons/fa'
import { ImSpinner } from 'react-icons/im'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { url } from '../../api/url'

const AuthenPage = () => {
    const [inputLogin, setInputLogin] = useState({
        username: '',
        password: '',
    })
    const [inputRegister, setInputRegister] = useState({
        username: '',
        password: '',
        first_name: '',
        last_name: ''
    })
    const [loading, setLoading] = useState({ register: false, login: false })
    const [showMessage, setShowMessage] = useState(false)
    const [user_id, setUserId] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()
    const onChangeInputLogin = (e) => {
        e.preventDefault()
        const value = e.target.value
        const name = e.target.name
        setInputLogin({
            ...inputLogin, [name]: value
        }
        )
    }
    const onChangeInputRegister = (e) => {
        e.preventDefault()
        const value = e.target.value
        const name = e.target.name
        setInputRegister({
            ...inputRegister, [name]: value
        }
        )
    }

    const handleLogin = async () => {
        const Login = async (obj) => {
            setLoading({ ...loading, login: true })
            const config = {
                method: 'post',
                //url: 'http://localhost:8000/api/v1/fefu/auth/login',
                url: `${url}/auth/login`,
                data: obj
            }
            const loginAPI = async () => {
                axios(config)
                    .then((res) => {
                        localStorage.setItem('user_id', res.data.result.user._id)
                        localStorage.setItem('token', res.data.result.token_id)
                        setUserId(localStorage.getItem('user_id'))
                        setLoading({ ...loading, login: false })
                    })
                    .catch((err) => {
                        setMessage('please check your username and password')
                        setLoading({ ...loading, login: false })
                    })
            }
            await loginAPI()
        }
        await Login(inputLogin)
        await setInputLogin({
            username: '',
            password: ''
        })
    }

    const handleRegister = async () => {
        const Register = async (obj) => {
            setLoading({ ...loading, register: true })
            const config = {
                method: 'post',
                url: `${url}/auth/register`,
                data: obj
            }
            const RegisterAPI = async () => {
                axios(config).then((res) => {
                    localStorage.setItem('user_id', res.data.result.user._id)
                    localStorage.setItem('token', res.data.result.token_id)
                    setUserId(localStorage.getItem('user_id'))
                    setLoading({ ...loading, register: false })
                })
                    .catch((err) => {
                        setMessage('this username already used')
                        setLoading({ ...loading, register: false })
                    })
            }
            await RegisterAPI()
        }
        await Register(inputRegister)
        await setInputRegister({
            username: '',
            password: '',
            first_name: '',
            last_name: ''
        })
    }
    useEffect(() => {
        if (!!user_id) {
            navigate('/dashboard')
        }
    }, [user_id])
    useEffect(() => {
        setShowMessage(true)
        setTimeout(() => {
            setShowMessage(false)
            setMessage('')
        }, 3000)
    }, [message])
    return (
        <Wrapper>
            <HeroText>
                <div className='title'>Authentication</div>
                <div className='underline' style={{ 'marginBottom': '20px' }}></div>
                This page just a demo authentication module by use Login API with JWT.
                <div className='warning'>Warning : Don't use your real username and real password that use in other site</div>
            </HeroText>
            <div style={{ 'display': 'flex' }}>
                <Container>
                    <div className='header'>Register</div>
                    {
                        !loading.register ?
                            <FormBox>
                                <div className='input-container'>
                                    <FaUserAlt />
                                    <input type='text' style={{ 'marginLeft': '15px' }} onChange={e => onChangeInputRegister(e)} name='username' value={inputRegister.username}></input>
                                </div>
                                <div className='input-container'>
                                    <FaKey />
                                    <input type='password' style={{ 'marginLeft': '15px' }} onChange={e => onChangeInputRegister(e)} name='password' value={inputRegister.password}></input>
                                </div>
                                <div className='input-container'>
                                    First Name
                                    <input type='text' style={{ 'marginLeft': '15px' }} onChange={e => onChangeInputRegister(e)} name='first_name' value={inputRegister.first_name}></input>
                                </div>
                                <div className='input-container'>
                                    Last Name
                                    <input type='text' style={{ 'marginLeft': '15px' }} onChange={e => onChangeInputRegister(e)} name='last_name' value={inputRegister.last_name}></input>
                                </div>
                                <button className='btn' type='submit' onClick={handleRegister}>Register</button>
                            </FormBox> :
                            <div style={{ margin: '50px auto' }}>
                                <div>loading...</div>
                                {/* <ImSpinner size={100} /> */}
                            </div>
                    }
                </Container>
                <Container style={{ height: '250px' }}>
                    <div className='header'>Login</div>
                    {
                        !loading.login ?
                            <FormBox>
                                <div className='input-container'>
                                    <FaUserAlt />
                                    <input type='text' style={{ 'marginLeft': '15px' }} onChange={e => onChangeInputLogin(e)} name='username' value={inputLogin.username}></input>
                                </div>
                                <div className='input-container'>
                                    <FaKey />
                                    <input type='password' style={{ 'marginLeft': '15px' }} onChange={e => onChangeInputLogin(e)} name='password' value={inputLogin.password}></input>
                                </div>
                                <button className='btn' type='submit' onClick={handleLogin}>Login</button>
                                {showMessage && <div style={{ 'color': 'red' }}>{message}</div>}
                            </FormBox> :
                            <div style={{ margin: '50px auto' }}>
                                <div>loading...</div>
                                {/* <ImSpinner size={100} /> */}
                            </div>
                    }
                </Container>
            </div>
        </Wrapper >
    )
}

export default AuthenPage

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;
    justify-content:center;
    align-items:center;
    background:#000000;
    color:#ffffff;
`

const Container = styled.div`
    height:auto;
    width:20rem;
    margin-top:5rem;
    padding:2.5rem 5rem;
    margin-left:5rem;
    margin-right:5rem;
    background:#5800FF;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    .header{
        font-size:36px;
        text-align:center;
    }
`

const HeroText = styled.div`
    margin-top:-2rem;
    color:#fff;
    font-size:18px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .title{
        font-size:36px;
        color:#FAEEE7;
    }
    .underline{
        width:20rem;
        height:0.2rem;
        background:#FAEEE7;
    }
    .warning{
        color:red;
        margin-top:20px;
    }
`

const FormBox = styled.div`
    font-size:20px;
    display:flex;
    flex-direction:column;
    input{
        height:24px;
        width:100%;
    }
    .input-container{
        display:flex;
        align-items:center;
        margin-top:20px;
    }
    .btn{
        margin-top:20px;
        padding:10px;
        color:#fff;
        background:#000;
        align-self:center;
        border-radius:10px;
    }
`