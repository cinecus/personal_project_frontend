import React from 'react'
import styled from 'styled-components'
import { FiGithub,FiGitlab } from 'react-icons/fi';
import { FaBitbucket } from 'react-icons/fa';

const FirstSection = () => {
  return (
    <Container id='section1' >
            
        <Section>
        {/* <Title>
        FirstSection
        </Title> */}
            <GridContainer>
            <GridItem>
                <Card>
                    <div>
                    <FiGithub color='black' size={80}/>
                    </div>
                    <div className='title'>
                        Desciption 1 
                    </div>
                    <div className='subtitle'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, atque sequi. Maiores quo necessitatibus similique.
                    </div>
                </Card>
            </GridItem>
            <GridItem>
                <Card>
                    <div>
                    <FiGitlab color='black' size={80}/>
                    </div>
                    <div className='title'>
                        Desciption 2 
                    </div>
                    <div className='subtitle'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, atque sequi. Maiores quo necessitatibus similique.
                    </div>
                </Card>
            </GridItem>
            <GridItem>
                <Card>
                    <div>
                    <FaBitbucket color='black' size={80}/>
                    </div>
                    <div className='title'>
                        Desciption 3 
                    </div>
                    <div className='subtitle'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, atque sequi. Maiores quo necessitatibus similique.
                    </div>
                </Card>
            </GridItem>
            </GridContainer>
        </Section>
    </Container>
  )
}

export default FirstSection

const Container = styled.div`
    width:100vw;
    height:100%;
    background:#fff;
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
    padding:2rem 8rem;
    gap: 3rem;
    @media screen and (max-width: 768px){
        padding:0rem 2rem;
    }
`
const Title = styled.div`
    font-size:1.5rem;
    color:white;
    padding-left:8rem;
`
const GridItem = styled.div`
    flex-grow:0;
    max-width:30%;
    flex-basis:30%;
    /* background:#000; */
    @media screen and (max-width: 768px){
        flex-grow:1;
        max-width:100%;
        flex-basis:100%;
}
`

const Card = styled.div`
    height: 15rem;
    width:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    .title{
        font-size:1.5rem;
        color:#000;
        text-align:center;
    }
    .subtitle{
        font-size:1rem;
        color:#000;
        text-align:center;
    }
`