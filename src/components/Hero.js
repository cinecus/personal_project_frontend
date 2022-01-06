import React from 'react'
import styled from 'styled-components'
import { RiComputerLine } from 'react-icons/ri'
import { GoCode } from 'react-icons/go'
import working_man from '../assets/working_man.jpg'

const Hero = () => {
    return (
        <WrapperContainer>
            <div className='hero-text'>
                <div className='title'>
                    FEFU Projects
                </div>
                <div className='subtitle'>
                    by Cici dev
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
                    placeat suscipit eius, perspiciatis, maiores saepe corporis quia molestiae a enim culpa commodi soluta! Nesciunt doloremque optio eligendi, eos explicabo necessitatibus?
                </p>
                <div className='btn'>
                    SEE MY PROFILE
                </div>
            </div>
            <div className='hero-image'>
                <img src={working_man} />
            </div>
        </WrapperContainer>
    )
}

const WrapperContainer = styled.div`
    display:flex;
    margin:-8px;
    padding: 0 80px; 
    height:650px;
    background:#FEECE9;
    justify-content:center;
    align-items:center;
    .hero-text{
        margin-left:50px;
        width:100%;
        height:100%;
        display:flex;
        /* background:#969696; */
        flex-direction:column;
        justify-content:center;
        .title{
            font-size:60px;
        }
        .subtitle{
            font-size:20px;
        }
        .btn{
            width:180px;
            height:50px;
            margin-top:30px;
            background:#FE7E6D;
            border-radius:0px;
            box-shadow: 2px 2px 13px 9px rgba(5, 5, 5, 0.1);
        }
    }
    .hero-image{
        display:flex;
        width:100%;
        justify-content:center;
        align-items:center;
        position: relative;
        img{
            width:400px;
            height:400px;
            border-radius:50%;
            box-shadow: 0 0 18px 18px white;
        }
    }

`

export default Hero
