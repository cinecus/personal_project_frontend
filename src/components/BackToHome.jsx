import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {FaRocket} from 'react-icons/fa'

const BackToHome = () => {
    return (
    <div style={{position:'fixed',margin:'2rem',bottom:'0',right:'0'}}>
        <Link to='/'>
            <Rocket>
            <FaRocket size={25} style={{'marginRight':'5px'}}/>
            Back To Home
            </Rocket>
        </Link>
    </div>
    )
}

export default BackToHome

const Rocket = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    animation-name:example;
    animation-iteration-count: infinite;
    animation-duration: 6s;
    animation-direction: alternate;
    transition:ease-in-out .3s;
    @keyframes example{
        0% {
            color:wheat;
            
        }
        25%{
            color:red;
        }
        50%{
            color:purple;
        }
        75%{
            color:blue;
        }
        100%{
            color:black;
        }
    }
`
