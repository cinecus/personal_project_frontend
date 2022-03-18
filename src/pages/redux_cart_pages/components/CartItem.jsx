import React from 'react'
import styled from 'styled-components'
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../../../store/slices/cartSlice'
const { confirm } = Modal

const CartItem = ({ item }) => {
    const { id, title, price, img, quantity } = item
    const dispatch = useDispatch()
    const showConfirm = (id) => {
        confirm({
            title: 'Do you Want to delete these items?',
            icon: <ExclamationCircleOutlined />,
            //content: '',
            onOk() {
                dispatch(deleteCart(id))
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    return (
        <Item>
            <div className='cart-item-image'>
            </div>
            <div className='cart-item-description'>
                {/* <div>
                    Code : 1
                </div> */}
                <div>
                    Name : {title}
                </div>
                <div>
                    Price : {price} Baht
                </div>
                <div>
                    Amount : {price * quantity} Baht
                </div>
            </div>
            <div className='cart-item-action'>
                <div>
                    ^
                </div>
                <div>
                    {quantity}
                </div>
                <div style={{ 'transform': 'rotate(180deg)' }}>
                    ^
                </div>
            </div>
            <div className='cart-button-delete' onClick={() => showConfirm(id)}>
                X
            </div>
        </Item>
    )
}

export default CartItem

const Item = styled.div`
    height:30vh;
    background:gray;
    padding:20px 40px;
    display:flex;
    justify-content:space-between;
    position: relative;
    border-radius:10px;
    .cart-item-image{
        width:30%;
        height:100%;
        background:red;
    }
    .cart-item-description{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        color:white;
        font-size:1rem;
        margin-left:5rem;
    }
    .cart-item-action{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        color:white;
        font-size:1rem;
        margin-left:5rem;
    }
    .cart-button-delete{
        position:absolute;
        width:1.5rem;
        height:1.5rem;
        border-radius:50%;
        right:-10px;
        top:-10px;
        background:red;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor: pointer;
    }
`