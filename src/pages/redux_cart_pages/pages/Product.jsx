import React from 'react'
import styled from 'styled-components'
import Item from '../components/Item'
import { products } from '../../../constant/redux_demo_data'

const Product = () => {
    return (
        <Wrapper>
            <h1 align="center">Products</h1>
            <Container>
                {products.map(el => (<Item product={el} />))}
            </Container>
        </Wrapper>
    )
}

export default Product

const Wrapper = styled.div`
    width:100vw;
    height:100%;
    min-width:100%;
    min-height:100vh;
    background:#FFF2F9;
    padding-top:6rem;
    padding-bottom:2rem;

`

const Container = styled.div`
    width:95vw;
    max-width:1400px;
    display:grid;
    gap:2rem 2rem;
    margin:2rem auto 0;
    grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
`