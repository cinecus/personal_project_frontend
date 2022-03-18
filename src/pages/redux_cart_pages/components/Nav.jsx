import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { signout } from '../../../store/slices/authSlice'

const Nav = () => {
    const cart = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <Navbar>
            <Link to='/redux/product' style={{ 'color': 'white' }}>
                <NavItem>
                    Product
                </NavItem>
            </Link>
            {
                user && <Link to='/redux/cart' style={{ 'color': 'white' }}>
                    <NavItem>
                        Cart
                        <div className='count'>
                            {
                                cart.reduce((sum, item) => sum + item.quantity, 0)
                            }
                        </div>
                    </NavItem>
                </Link>
            }
            {
                !user ? <Link to='/redux/signin' style={{ 'color': 'white' }}>
                    <NavItem>
                        Sign In
                    </NavItem>
                </Link> :
                    <NavItem onClick={() => dispatch(signout())}>
                        Sign Out
                    </NavItem>
            }

        </Navbar>
    )
}

export default Nav

const Navbar = styled.div`
    min-width:100%;
    background:#323232;
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:20px;
    position: fixed;
    top: 0;
    overflow:hidden;
    z-index:500;
`

const NavItem = styled.div`
    color:#FDEBF7;
    font-size:1.2rem;
    height:auto;
    position: relative;
    cursor: pointer;
    &:hover{
        transform:scale(1.03)
    }
    .count{
        position:absolute;
        width:1.5rem;
        height:1.5rem;
        background:red;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:50%;
        right:-25px;
        bottom:-10px;
    }
`