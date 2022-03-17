import React from 'react'
import styled from 'styled-components'
import Item from '../components/Item'

const Product = () => {
    return (
        <Wrapper>
            <h1 align="center">Products</h1>
            <Container>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </Container>
        </Wrapper>
    )
}

export default Product

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    min-width:100%;
    min-height:200vh;
    background:#FFF2F9;
`

const Container = styled.div`
    width:95vw;
    max-width:1400px;
    display:grid;
    gap:2rem 2rem;
    margin:2rem auto 0;
    grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
`