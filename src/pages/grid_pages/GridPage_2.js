import React from 'react'
import styled from 'styled-components'
import mockup from '../../assets/mockup.jpg'

const GridPage_2 = () => {
    return (
        <>
            <Wrapper>
                <Card>
                    <img src={mockup} />
                </Card>
                <Card>
                    <img src={mockup} />
                </Card>
                <Card>
                    <img src={mockup} />
                </Card>
                <Card>
                    <img src={mockup} />
                </Card>
                <Card>
                    <img src={mockup} />
                </Card>
                <Card>
                    <img src={mockup} />
                </Card>
            </Wrapper>
        </>

    )
}

export default GridPage_2

const Wrapper = styled.div`
    width:100vw;
    max-width:1400px;
    display:grid;    
    gap:2rem 2rem;
    margin:1rem auto 0;
    grid-template-columns: repeat(auto-fill,minmax(330px,1fr));
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
`

const Card = styled.div`
    width:100%;
    height:20rem;
    background:#969696;
    border-radius:5px;
    transition:0.3s ease-in-out all;
    img{
        width:100%;
        height:15rem;
        border-radius:5px 5px 0 0;
    }
    &:hover{
        transform:Scale(1.1)
    }

`
