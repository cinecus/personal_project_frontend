import React from 'react'
import styled from 'styled-components'
import giphy from '../../../assets/giphy.gif'
import {FaFacebook,FaInstagram,FaDiscord} from 'react-icons/fa'

const FooterSection = () => {
  return (
    <Container>
        <Section>
            <GridContainer>
                <GridItem>
                    <div className='logo'>

                <img src={giphy}   frameBorder="0"  ></img>
                    <div className='title'>
                        Emojicon
                    </div>
                    </div>
                </GridItem>
                <GridItem>
                    <div className='column'>
                        <div className='header'>
                            Build by
                        </div>
                        <div className='item'>
                            Lorem, ipsum.
                        </div>
                        <div className='item'>
                            Lorem, ipsum.
                        </div>
                        <div className='item'>
                            Lorem, ipsum.
                        </div>
                    </div>
                </GridItem>
                <GridItem>
                <div className='column'>
                        <div className='header'>
                            About
                        </div>
                        <div className='item'>
                            Lorem, ipsum.
                        </div>
                        <div className='item'>
                            Lorem, ipsum.
                        </div>
                        <div className='item'>
                            Lorem, ipsum.
                        </div>
                    </div>
                </GridItem>
                <GridItem>
                <div className='column'>
                        <div className='header'>
                            Official Channels
                        </div>
                        <div className='item'>
                            Lorem, ipsum.
                        </div>
                        <div className='item'>
                            Lorem, ipsum.
                        </div>
                        <div className='item'>
                            Lorem, ipsum.
                        </div>
                        <div className='item'>
                            Lorem, ipsum.
                        </div>
                    </div>
                </GridItem>
                <GridItem>
                <div className='column'>
                        <div className='header'>
                            Contacts
                        </div>
                        <div className='item'>
                            chananon.seen@gmail.com
                        </div>
                        <div className='container'>
                            <a href='https://www.facebook.com/chananon.seen' target='_blank'>
                                <FaFacebook size={25}/>
                            </a>
                            <a href='https://www.instagram.com/cinecus_cc' target='_blank'>
                                <FaInstagram size={25}/>
                            </a>
                            <a href='https://discord.com/' target='_blank'>
                                <FaDiscord size={25}/>
                            </a>
                        </div>
                    </div>
                </GridItem>
            </GridContainer>
        </Section>
    </Container>
  )
}

export default FooterSection

const Container = styled.div`
    width:100vw;
    height:100%;
    background:#000;
    color:#fff;
`

const Section = styled.div`
    width:100%;
    margin:0 auto;
    padding:2rem;
`

const GridContainer = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    padding:2em 8rem 6rem;
    @media screen and (max-width: 768px){
        padding:0rem 2rem;
        flex-direction:column;
    }
`

const GridItem = styled.div`
    flex-grow:0;
    max-width:20%;
    flex-basis:20%;
    @media screen and (max-width: 768px){
        max-width:100%;
        flex-basis:100%;
        gap:2rem;
    }
    .logo{
        display:flex;
        align-items:center;
        gap:1rem;
    }
    .title{
        font-size:1.2rem;
        /* font-weight:600; */
    }
    .column{
        display:flex;
        flex-direction:column;
        justify-content:center;
        gap:1rem;
    }
    .header{
        font-size:1.2rem;
        font-weight:600; 
    }
    .item{
        font-size:0.8rem;
        color:grey;
    }
    .container{
        display:flex;
        gap:1rem;
        a{
            text-decoration:none !important;
            color:#fff !important;
        }
    }
    img{
        height:3rem;
        width:3rem;
    }

`