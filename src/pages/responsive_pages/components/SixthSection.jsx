import React from 'react'
import styled from 'styled-components'
import {FiArrowRight} from 'react-icons/fi'
import {MdEmojiPeople,MdOutlineEmojiObjects,MdOutlineEmojiFlags,} from 'react-icons/md'
import {GoDeviceMobile} from 'react-icons/go'

const SixthSection = () => {
    return (
    <Container id='section4'>
        <Section>
            <GridContainer>
                <GridItem_1>
                    <div className='title'>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </div>
                    <div className='content'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem itaque atque libero molestias doloremque accusantium.
                    </div>
                </GridItem_1>
                <GridItem_2>
                    <List>
                        <div className='list-item'>
                            <div className='icon'>
                            <MdEmojiPeople/>
                            </div>
                            This is List Name #1 
                        </div>
                        <FiArrowRight/>
                    </List>
                    <hr></hr>
                    <List>
                        <div className='list-item'>
                            <div className='icon'>
                            <MdOutlineEmojiObjects/>
                            </div>
                            This is List Name #2 
                        </div>
                        <FiArrowRight/>
                    </List>
                    <hr></hr>
                    <List>
                        <div className='list-item'>
                            <div className='icon'>
                            <GoDeviceMobile />
                            </div>
                            This is List Name #3
                        </div>
                        <FiArrowRight/>
                    </List>
                    <hr></hr>
                    <List>
                        <div className='list-item'>
                            <div className='icon'>
                            <MdOutlineEmojiFlags/>
                            </div>
                            This is List Name #4
                        </div>
                        <FiArrowRight/>
                    </List>
                </GridItem_2>
            </GridContainer>
        </Section>
    </Container>
  )
}

export default SixthSection

const Container = styled.div`
    width:100vw;
    height:100%;
    background:#000;
    
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
    gap:4rem;
    position:relative;
    @media screen and (max-width: 768px){
        padding:0rem 2rem;
    }
`

const GridItem_1 = styled.div`
    flex-grow:0;
    max-width:45%;
    flex-basis:45%;
    .title{
        font-size:2rem;
        font-weight:500;
        color:blueviolet;
    }
    .content{
        font-size:1rem;
        color:gray;
    }
    @media screen and (max-width: 768px){
        max-width:100%;
        flex-basis:100%;
    }
`

const GridItem_2 = styled.div`
    flex-grow:0;
    max-width:45%;
    flex-basis:45%;
    @media screen and (max-width: 768px){
        max-width:100%;
        flex-basis:100%;
    }
`

const List = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:1.5rem;
    color:#fff;
    padding:1.2rem 0rem;
    .list-item{
        display:flex;
        gap:2rem;
        color:#fff;
        display:flex;
        align-items:center;
        font-size:1.4rem;
    }
    .icon{
            color:#fff;
            background:blueviolet;
            width:2.2rem;
            height:2.2rem;
            border-radius:50%;
            display:flex;
            justify-content:center;
            align-items:center;
        }
    .right-arrow{
        
    }
    &:hover{
        cursor: pointer;
        .list-item{
            text-decoration:underline;
        }
    }
`