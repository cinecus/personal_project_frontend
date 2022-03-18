import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../store/slices/cartSlice'

const Item = ({ product }) => {
    const { id, title, price, image } = product
    const dispatch = useDispatch()
    return (
        <Card>
            <div className='card-image'>
                <img src={image} />
            </div>
            <div className='card-title'>
                <div>ID : {id}</div>
                <div>{title}</div>
                
            <div>{price} Baht</div>
            </div>
            <div className='card-button-container'>
                <button className='btn' onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}>Add</button>
            </div>
        </Card>
    )
}

export default Item

const Card = styled.div`
    width:100%;
    height:300px;
    background:#F7E2E2;
    border-radius:10px;
    border:solid #000 1px;
    &:hover{
            transform:scale(1.02)
        }
    .card-image{
        width:100%;
        height:70%;
        background:whitesmoke;
        border-radius:10px 10px 0px 0px;
        img{
            border-radius:10px 10px 0px 0px;
            width:100%;
            height:100%;
        }
        
    }
    .card-title{
        height:15%;
        padding:20px;
        display:flex;
        justify-content:space-around;
        align-items:center;
        font-size:1rem;
    }
    .card-button-container{
        height:15%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        font-size:1rem;
        .btn{
            color:white;
            width:100%;
            height:100%;
            background:#1A132F;
            border-radius:5px;
            padding:2.5px 10px;
            cursor:pointer;
        }
    }
`

