import React from 'react'
import styled from 'styled-components'
import like_emoji from '../../../assets/like_emoji.png'

const ForthSection = () => {
  return (
    <Container>
        <Section>
            <GridContainer>
            <GridItem_2>
                    <div className='title'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fugit.
                    </div>
                    <div className='content'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque dolorum blanditiis vitae deserunt deleniti eligendi perferendis est, placeat distinctio saepe ullam fuga illo? Sed, dolorem reiciendis aut eum totam dignissimos expedita accusamus! Eum architecto nulla nesciunt adipisci quia inventore repellendus doloribus perferendis? In earum quod expedita neque, nemo nesciunt debitis fugit, quam a assumenda cumque.
                    </div>
                </GridItem_2>
                <GridItem_1>
                    <img src={like_emoji} />
                </GridItem_1>
                
            </GridContainer>
        </Section>
    </Container>
  )
}

export default ForthSection


const Container = styled.div`
    width:100vw;
    height:100%;
    background:#000;
    
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
    @media screen and (max-width: 768px){
        padding:0rem 2rem;
        flex-direction:column-reverse;
    }
`

const GridItem_1 = styled.div`
    flex-grow:0;
    max-width:50%;
    flex-basis:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    /* color:#fff; */
    img{
        width:22rem;
        height:22rem;
        border-radius:50%;
        
    }
    img:focus, img:hover {
        animation: bounce 1s linear;
    }
    @keyframes bounce{
        20%,50%,80%,to{
            transform:translateY(0)
        }
        40%{
            transform:translateY(-30px)
        }
        70%{
            transform:translateY(-15px)
        }
        90%{
            transform:translateY(4px)
        }
    }
    @media screen and (max-width: 768px){
        max-width:100%;
        flex-basis:100%;
    }
    /* background:#000; */
`

const GridItem_2 = styled.div`
    flex-grow:0;
    max-width:50%;
    flex-basis:50%;
    color:#fff;
    .title{
        font-size:1.2rem;
        color:#fff;
        font-weight:500;
    }
    .content{
        margin-top:1rem;
        font-size:1rem;
        color:gray;
    }
    @media screen and (max-width: 768px){
        max-width:100%;
        flex-basis:100%;
    }
    /* background:#000; */
`