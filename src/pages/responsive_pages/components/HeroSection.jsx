import React from 'react'
import styled from 'styled-components'
import giphy from '../../../assets/giphy.gif'

const HeroSection = () => {
  return (
    <Container id='hero'>
        <Section>
            <GridContainer>
                <GridItem_60p>
                    <Header>
                        Emojicon Landing Web Page
                    </Header>
                    <Header style={{'color':'blueviolet','fontWeight':100}}>
                        Fully Responsive website Design.
                    </Header>
                    <Title>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ipsam perspiciatis, corporis minima temporibus magni.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ipsam perspiciatis, corporis minima temporibus magni.
                        Lorem ipsum dolor sit amet consectetur,
                    </Title>
                </GridItem_60p>
                <GridItem_40p>
                    <ImageHeroContainer>
                    
                        <iframe src={giphy} width="100%" height="100%" style={{'position':'absolute'}} frameBorder="0"  ></iframe>
                
                    {/* <img src={mist} width='400px' height='400px'/> */}
                    </ImageHeroContainer>
                </GridItem_40p>
            </GridContainer>
        </Section>
    </Container>
  )
}

export default HeroSection

const Container = styled.div`
    width:100vw;
    height:100%;
    min-height:90vh;
    background:#000;
    /* background: linear-gradient(90deg, rgba(174,214,238,1) 28%, rgba(155,148,233,1) 84%); */
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
    padding:8rem 8rem;
    @media screen and (max-width: 768px){
        padding:2rem 2rem;
    }
`

const GridItem = styled.div`
    flex-grow:0;
    max-width:50%;
    flex-basis:50%;
    /* background:#000; */
`
const GridItem_40p = styled(GridItem)`
    max-width:40%;
    flex-basis:40%;
    @media screen and (max-width: 768px){
        display:none;
    }
`
const GridItem_60p = styled(GridItem)`
    max-width:60%;
    flex-basis:60%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    @media screen and (max-width: 768px){
        max-width:100%;
        flex-basis:100%;
        text-align:center;
        align-items:center;
    }
    
`

const Header = styled.div`
    font-size:2rem;
    margin-top:1rem;
    color:white;
    font-weight:600;
`

const Title = styled.div`
    margin-top:1rem;
    font-size:1.2rem;
    color:white;
    
`

const ImageHeroContainer = styled.div`
    width:400px;
    height:400px;
    /* border-radius:50%; */
    margin:0 auto;
    img{
        width:100%;
        height:100%;
        border-radius:10px;
        /* box-shadow: 0 0 18px 18px wheat; */
        
    }
    @media screen and (max-width: 480px){
        display:none;
    }
`