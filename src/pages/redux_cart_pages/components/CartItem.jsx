import React from 'react'
import styled from 'styled-components'
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { deleteCart,increaseCartItem,decreseCartItem } from '../../../store/slices/cartSlice'
import {FaPlus,FaMinus} from 'react-icons/fa'
const { confirm } = Modal

const CartItem = ({ item }) => {
    const { id, title, price, image, quantity } = item
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
                <img src={image}/>
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
                <div className='action' onClick={()=>dispatch(increaseCartItem(id))}>
                    <FaPlus/>
                </div>
                <div>
                    {quantity}
                </div>
                <div className='action'  onClick={()=>dispatch(decreseCartItem(id))}>
                    <FaMinus/>
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
    background:lightgrey;
    padding:20px 40px;
    display:flex;
    justify-content:space-between;
    position: relative;
    border-radius:10px;
    z-index:1;
    user-select:none;
    .cart-item-image{
        width:30%;
        height:100%;
        background:whitesmoke;
        img{
            width:100%;
            height:100%;
        }
    }
    .cart-item-description{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        color:#000;
        font-size:1rem;
        margin-left:5rem;
    }
    .cart-item-action{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        color:#000;
        font-size:1rem;
        font-weight:1000;
        margin-left:5rem;
        .action{
            cursor: pointer;
        }
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