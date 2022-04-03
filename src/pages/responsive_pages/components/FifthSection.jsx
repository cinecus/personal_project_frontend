import React from 'react'
import styled from 'styled-components'
import comment_bubble from '../../../assets/comment_bubble.png'
import {FiArrowRight} from 'react-icons/fi'

const FifthSection = () => {
  return (
    <Container id='section3'>
        <Section>
            <Title>Read Our Forum</Title>
            <Subtitle>Most discussed topics</Subtitle>
            <GridContainer>
                <Item>
                    <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi a eos neque doloribus fugit.
                    </div>
                    <a>Read more <FiArrowRight/></a>
                </Item>
                <Item>
                    <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ipsam ducimus ea id quia mollitia porro.
                    </div>
                    <a>Read more <FiArrowRight/></a>
                </Item>
                <Item>
                    <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium laudantium ex repudiandae voluptas aliquam?
                    </div>
                    <a>Read more <FiArrowRight/></a>
                </Item>
                <BackgroundItem>
                    <img src={comment_bubble}/>
                </BackgroundItem>
            </GridContainer>
            <Btn>See All</Btn>
        </Section>
    </Container>
  )
}

export default FifthSection

const Container = styled.div`
    width:100vw;
    height:100%;
    min-height:50vh;
    background:#fff;
    
`

const Section = styled.div`
    width:100%;
    margin:0 auto;
    padding:4rem 2rem;
`

const GridContainer = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    padding:2rem 8rem;
    gap:1rem;
    position:relative;
    @media screen and (max-width: 768px){
        padding:0rem 2rem;
    }
`

const Title = styled.div`
    font-size:2.5rem;
    padding:0rem 8rem;
    color:#000;
    /* font-weight:600; */
    @media screen and (max-width: 768px){
        text-align:center;
        padding:0rem 2rem;
    }
`

const Subtitle = styled.div`
    font-size:1.6rem;
    padding:0rem 8rem;
    color:blueviolet;
    font-weight:800;
    @media screen and (max-width: 768px){
        text-align:center;
        padding:0rem 2rem;
    }
`

const Item = styled.div`
    font-size:1rem;
    color:grey;
    flex-grow:0;
    max-width:30%;
    flex-basis:30%;
    a{
        color:blueviolet;
        vertical-align:middle;
        display:flex;
        align-items:center;
        gap:0.5rem;
    }
    @media screen and (max-width: 768px){
        max-width:100%;
        flex-basis:100%;
    }
`

const BackgroundItem = styled.div`
    position:absolute;
    z-index:1;
    right:10rem;
    top:-10rem;
    img{
        width:18rem;
        height:18rem;
        opacity:0.2;
    }
    @media screen and (max-width: 768px){
        display:none;
    }
`

const Btn = styled.button`
    width:6rem;
    height:3rem;
    background:#000;
    color:#fff;
    margin:0rem 8rem;
    border-radius:3px;
    margin-top:1rem;
    &:hover{
        opacity:0.8;
        cursor: pointer;
    }

`