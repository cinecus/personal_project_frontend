import React, { useState } from 'react'
import styled from 'styled-components'
import bnb from '../../assets/bnb.png'
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
                    <FrontContent>
                        <div className='sq1'>
                            <div className='sq4' style={{ marginLeft: '100px' }}></div>
                            <div className='sq4' style={{ marginTop: '99px' }}></div>
                            <div className='sq4' style={{ marginLeft: '26px', marginTop: '125px' }}></div>
                            <div className='sq4' style={{ marginLeft: '26px', marginTop: '125px' }}></div>
                            <div className='sq4' style={{ marginLeft: '125px', marginTop: '26px' }}></div>
                        </div>
                        <div className='sq2'></div>
                        <div className='sq3'></div>

                    </FrontContent>
                </div>
                <div className='back' style={buttonText === 'Hide' ? { 'transform': 'perspective(600px) rotateY(0deg)' } : {}}>
                    <BackContent>
                        <img src={bnb} style={{ width: '200px', height: '200px' }} placeholder='bnb'></img>
                    </BackContent>
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
    background:radial-gradient(circle, rgba(189,189,189,0.55) 10%, rgba(172,172,172,1) 24%, rgba(0,0,0,1) 91%);
`

const Card = styled.div`
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    width:20rem;
    height:20rem;
    border-radius:50%;
    .front,.back{
        width:100%;
        height:100%;
        position:absolute;
        overflow: hidden;
        border-radius:50%;
        backface-visibility: hidden;
        transition:transform 0.5s linear;
    }
    .front{
        transform: perspective(600px) rotateY(0deg);
        background:#e1b303;
        color:#EEEEEE;
    }
    .back{
        transform: perspective(600px) rotateY(180deg);
        background:#cb9800;
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
    top:85%;
    transform:translate(-50%,-100%);
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

const FrontContent = styled.div`
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    display:flex;
    justify-content:center;
    align-items:center;
    .sq1{
        width:150px;
        height:150px;
        transform:rotate(45deg);
        background-color:white;
        position:absolute;
    }
    .sq2{
        width:100px;
        height:100px;
        transform:rotate(45deg);
        background-color:#e1b303;
        position:absolute;
    }
    .sq3{
        width:50px;
        height:50px;
        transform:rotate(45deg);
        background-color:white;
        position:absolute;
    }
    .sq4{
        width:26px;
        height:26px;
        //transform:rotate(45deg);
        background-color:#e1b303;
        position:absolute;
    }
`

const BackContent = styled.div`
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    font-size:100px;
    display:flex;
    justify-content:center;
    align-items:center;
`