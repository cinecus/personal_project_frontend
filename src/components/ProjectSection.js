import React from 'react'
import styled from 'styled-components'

const ProjectSection = () => {
    return (
        <WrapperContainer>
            <div className='title'>Front End Projects</div>
            <div className='under-line'></div>
            <div className='row'>
                <div className='card'>
                    <div className='image-card'></div>
                    <div className='content-card'></div>
                </div>
                <div className='card'>
                    <div className='image-card'></div>
                    <div className='content-card'></div>
                </div>
                <div className='card'>
                    <div className='image-card'></div>
                    <div className='content-card'></div>
                </div>
                <div className='card'>
                    <div className='image-card'></div>
                    <div className='content-card'></div>
                </div>
                <div className='card'>
                    <div className='image-card'></div>
                    <div className='content-card'></div>
                </div>
                <div className='card'>
                    <div className='image-card'></div>
                    <div className='content-card'></div>
                </div>
            </div>
        </WrapperContainer>
    )
}

export default ProjectSection

const WrapperContainer = styled.div`
    display:flex;
    width:100%;
    height:auto;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:40px;
    .title{
            font-size:30px;
        }
    .under-line{
        margin-top:5px;
        width:200px;
        height:3px;
        background:#FE7E6D;
    }
    .row{
        width:80%;
        height:300px;
        background:#FE7E6D;
        margin-top:20px;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center
    }
    .card{
        width:30%;
        height:100%;
        background:#969696;
        margin-left:10px;
        margin-right:10px;
        margin-bottom:20px;
        display:flex;
        flex-direction:column;
        .image-card{
            width:100%;
            height:80%;
            background: #000;
        }
        .content-card{
            width:100%;
            height:20%;
            background: #F55FFF;
        }
    }

`