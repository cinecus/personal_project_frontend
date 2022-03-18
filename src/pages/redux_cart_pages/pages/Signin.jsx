import React from 'react'
import styled from 'styled-components'
import { Form, Input, Button, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { signinAsync } from '../../../store/slices/authSlice';

const Signin = () => {
    const dispatch = useDispatch()
    const { loading, error } = useSelector(state => state.auth)
    const onFinish = (values) => {
        const { username, password } = values
        dispatch(signinAsync({ username, password }))
    };
    return (
        <Wrapper>
            {/* <h1 align='center'>Sign In</h1> */}
            <Container>
                <Box>
                    <div className='title'>Sign In</div>
                    <Spin spinning={loading} tip="loading...">
                        <div className='form'>
                            <Form
                                name="basic"
                                onFinish={onFinish}
                                autoComplete="off"
                                style={{ color: 'white' }}
                            >
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item >
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                                {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
                            </Form>
                        </div>
                    </Spin>
                </Box>
            </Container>
        </Wrapper>
    )
}

export default Signin

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    min-width:100%;
    min-height:100%;
    background:#FFF2F9;
`

const Container = styled.div`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    
`

const Box = styled.div`
    width:40rem;
    height:20rem;
    /* padding:5rem; */
    margin-top:-8rem;
    border-radius:20px;
    background:white;
    .title{
        height:20%;
        color:white;
        background:#323232;
        border-radius:20px 20px 0px 0px;
        padding:1rem 2.5rem;
        font-size:1.2rem;
    }
    .form{
        height:80%;
        padding:2rem 8rem;
    }
`