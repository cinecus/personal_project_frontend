import React from 'react'
import styled from 'styled-components'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector(state => state.cart)
    return (
        <Wrapper>
            <h1 align='center'>Carts</h1>
            <Container>
                {
                    cart.map((el, i) => {
                        return <CartItem key={i} item={el} />
                    })
                }
            </Container>
        </Wrapper>

    )
}

export default Cart

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
    width:45vw;
    max-width:1200px;
    margin:2rem auto 0;
    display:grid;
    grid-template-rows:auto;
    grid-gap: 1rem;
`

// const CartItem = styled.div`
//     height:30vh;
//     background:gray;
//     padding:20px 40px;
//     display:flex;
//     justify-content:space-between;
//     position: relative;
//     .cart-item-image{
//         width:30%;
//         height:100%;
//         background:red;
//     }
//     .cart-item-description{
//         display:flex;
//         flex-direction:column;
//         justify-content:space-between;
//         color:white;
//         font-size:1rem;
//         margin-left:5rem;
//     }
//     .cart-item-action{
//         display:flex;
//         flex-direction:column;
//         justify-content:space-between;
//         color:white;
//         font-size:1rem;
//         margin-left:5rem;
//     }
//     .cart-button-delete{
//         position:absolute;
//         width:1.5rem;
//         height:1.5rem;
//         border-radius:50%;
//         right:-10px;
//         top:-10px;
//         background:red;
//         color:white;
//         display:flex;
//         justify-content:center;
//         align-items:center;
//     }
// `