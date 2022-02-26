import React from 'react'
import styled from 'styled-components'
import mockup from '../assets/mockup.jpg'
import { Link } from 'react-router-dom'

const ProjectSectionGrid = ({prop}) => {
    const {title,bg,cards} = prop
    return (
        <WrapperContainer style={{ 'background': bg }}>
            <div className='title'>{title}
                <div className='under-line'></div>
            </div>
        <Wrapper>
            {
                cards.map((elem)=>{
                    return (<Card key={elem.key}>
                        <a href={elem.url} >
                        <div className='image-card'>
                            <img src={elem.image} />
                        </div>
                        <div className='content-card'>
                            #{elem.key} {elem.title}
                        </div>
                        </a>
                    </Card>)
                })
            }
        </Wrapper>
        </WrapperContainer>
    )
}

export default ProjectSectionGrid

const WrapperContainer = styled.div`
    display:block;
    width:100%;
    height: max-content;
    margin-top:50px;
    padding-bottom:100px;
    // background:#969696;
    .title{
            font-size:36px;
            text-align:center;
        }
    .under-line{
        margin:5px auto 0;
        width:200px;
        height:3px;
        background:#FE7E6D;
    }
`

const Wrapper = styled.div`
    width:80vw;
    max-width:1400px;
    display:grid;    
    gap:3rem 3rem;
    margin:2rem auto 0;
    grid-template-columns: repeat(auto-fill,minmax(330px,1fr));
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
`

const Card = styled.div`
    width:100%;
    height:300px;
    margin-left:15px;
    margin-right:15px;
    margin-bottom:20px;
    display:flex;
    flex-direction:column;
    border-radius:10px 10px 10px 10px;
    box-shadow: 0px 2px 20px 3px rgba(5, 5, 5, 0.1);
    transition:0.3s ease-in-out all;
     // border:1px solid #161616;
    a{
        width:100%;
        height:100%;
        text-decoration:none;
        color:#000000;
    }
    .image-card{
        width:100%;
        height:80%;
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
    &:hover{
        transform:scale(1.05);
        cursor:pointer;
    }
`

