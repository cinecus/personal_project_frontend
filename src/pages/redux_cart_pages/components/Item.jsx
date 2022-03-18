import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../store/slices/cartSlice'

const Item = ({ product }) => {
    const { id, title, price, img } = product
    const dispatch = useDispatch()
    return (
        <Card>
            <div className='card-image'>
            </div>
            <div className='card-title'>
                <div>{id}</div>
                <div>{title}</div>
                <div>{price}</div>
            </div>
            <div className='card-button-container'>
                <button onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}>Add</button>
            </div>
        </Card>
    )
}

export default Item

const Card = styled.div`
    width:100%;
    height:300px;
    background:#323232;
    border-radius:10px;
    &:hover{
            transform:scale(1.02)
        }
    .card-image{
        width:100%;
        height:70%;
        background:yellowgreen;
        border-radius:10px 10px 0px 0px;
        
    }
    .card-title{
        height:15%;
        padding:20px;
        color:red;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .card-button-container{
        height:10%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`

