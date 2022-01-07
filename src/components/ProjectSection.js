import React from 'react'
import styled from 'styled-components'
import mockup from '../assets/mockup.jpg'
import { Link } from 'react-router-dom'

const ProjectSection = ({ prop }) => {
    const { title, bg } = prop
    return (
        <WrapperContainer style={{ 'background': bg }}>
            <div className='title'>{title}
                <div className='under-line'></div>
            </div>
            <div className='row'>
                <div className='card'>
                    <Link to='/subscription'>
                        <div className='image-card'>
                            <img src={mockup} />
                        </div>
                        <div className='content-card'>
                            #1 Subscription
                        </div>
                    </Link>
                </div>
                <div className='card'>
                    <div className='image-card'>
                        <img src={mockup} />
                    </div>
                    <div className='content-card'>
                        #1 Subscription
                    </div>
                </div>
                <div className='card'>
                    <div className='image-card'>
                        <img src={mockup} />
                    </div>
                    <div className='content-card'>
                        #1 Subscription
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='card'>
                    <div className='image-card'>
                        <img src={mockup} />
                    </div>
                    <div className='content-card'>
                        #1 Subscription
                    </div>
                </div>
                <div className='card'>
                    <div className='image-card'>
                        <img src={mockup} />
                    </div>
                    <div className='content-card'>
                        #1 Subscription
                    </div>
                </div>
                <div className='card'>
                    <div className='image-card'>
                        <img src={mockup} />
                    </div>
                    <div className='content-card'>
                        #1 Subscription
                    </div>
                </div>
            </div>
        </WrapperContainer>
    )
}

export default ProjectSection

const WrapperContainer = styled.div`
    display:block;
    width:100%;
    height: max-content;
    margin-top:50px;
    padding-bottom:100px;
    // background:#969696;
    .title{
            font-size:30px;
            text-align:center;
        }
    .under-line{
        margin:5px auto 0;
        width:200px;
        height:3px;
        background:#FE7E6D;
    }
    .row{
        width:80%;
        height:300px ;
        // background:#FE7E6D;
        margin:30px auto 0;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
    }
    .card{
        width:30%;
        height:100%;
        // background:#969696;
        margin-left:15px;
        margin-right:15px;
        margin-bottom:20px;
        display:flex;
        flex-direction:column;
        border-radius:10px 10px 10px 10px;
        box-shadow: 0px 2px 20px 3px rgba(5, 5, 5, 0.1);
        // border:1px solid #161616;
        .image-card{
            width:100%;
            height:80%;
            background: #000;
            img{
                border-radius:10px 10px 0px 0px;
                width:100%;
                height:100%;
            }
        }
        .content-card{
            width:100%;
            height:20%;
            background: #ffff;
            border-radius:0px 0px 10px 10px;
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
    .card:hover{
        transform:scale(1.05);
        cursor:pointer;
    }

`