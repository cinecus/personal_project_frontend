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
                    Cinecus Personal Projects
                </div>
                <div className='subtitle'>
                    by Cinecus.CC
                </div>
                <p>
                    This site is built for present my frontend project by use ReactJS. Purpose of project I need to pactice some frontend skill such as UI design, connect API from other site and my own API.
                    {/* Not use for commercial. */}
                </p>
                <a className='btn' href="https://github.com/cinecus" target='_blank'>
                    SEE MY PROFILE
                </a>
            </div>
            <div className='hero-image'>
                <img src={working_man} />
            </div>
        </WrapperContainer>
    )
}

const WrapperContainer = styled.div`
    display:flex;
    padding: 0 80px; 
    height:700px;
    background:linear-gradient(180deg, rgba(254,236,233,1) 63%, rgba(255,255,255,1) 89%);
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
            font-size:50px;
            font-weight:500;
        }
        .subtitle{
            font-size:20px;
        }
        .btn{
            width:180px;
            height:50px;
            margin-top:30px;
            background:#FE7E6D;
            color:#ffff !important;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:0px;
            box-shadow: 2px 2px 13px 9px rgba(5, 5, 5, 0.1);
            cursor: pointer;
            animation:btnAnimation 5s linear 3s infinite alternate;
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
    @keyframes btnAnimation {
        0% {transform:scale(1.0);}
        25% {transform:scale(1.1);}
        50% {transform:scale(1.2);}
        75% {transform:scale(1.1);}
        100% {transform:scale(1);}
    }

`

export default Hero
