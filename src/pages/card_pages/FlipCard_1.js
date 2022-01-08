import React, { useState } from 'react'
import styled from 'styled-components'

const FlipCard_1 = () => {
    const [buttonText, setButtonText] = useState('Show')
    const toggleButton = () => {
        if (buttonText === 'Show') {
            setButtonText('Hide')
        } else {
            setButtonText('Show')
        }
    }
    return (
        <Wrapper>
            <Card>
                <div className='front' style={buttonText === 'Hide' ? { 'transform': 'perspective(600px) rotateY(-180deg)' } : {}}>
                    <div className='content'>
                        Front
                    </div>
                </div>
                <div className='back' style={buttonText === 'Hide' ? { 'transform': 'perspective(600px) rotateY(0deg)' } : {}}>
                    <div className='content'>
                        Back
                    </div>
                </div>
            </Card>
            <Button onClick={toggleButton}>{buttonText}</Button>
        </Wrapper >
    )
}

export default FlipCard_1

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    background:#000000;
`

const Card = styled.div`
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    width:20rem;
    height:30rem;
    background:#000000;
    .front,.back{
        width:100%;
        height:100%;
        position:absolute;
        overflow: hidden;
        backface-visibility: hidden;
        transition:transform 0.5s linear;
    }
    .front{
        transform: perspective(600px) rotateY(0deg);
        background:#BC8CF2;
        color:#EEEEEE;
    }
    .back{
        transform: perspective(600px) rotateY(180deg);
        background:#AA14F0;
        color:#EEEEEE;
    }
    &:hover > .front{
        transform: perspective(600px) rotateY(-180deg);
    }
    &:hover > .back{
        transform: perspective(600px) rotateY(0deg);
    }
    .content{
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        font-size:30px;
    }
`

const Button = styled.div`
    position:absolute;
    left:50%;
    top:80%;
    transform:translate(-50%,-50%);
    height:auto;
    width:120px;
    padding:5px;
    border-radius:5px;
    text-align:center;
    background:#EEEEEE;
    cursor:pointer;
    &:hover{
        opacity:0.9
    }
`