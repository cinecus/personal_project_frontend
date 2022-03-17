import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
    return (
        <Navbar>
            <Link to='/redux/product' style={{ 'color': 'white' }}>
                <NavItem>
                    Product
                </NavItem>
            </Link>
            <Link to='/redux/cart' style={{ 'color': 'white' }}>
                <NavItem>
                    Cart
                </NavItem>
            </Link>
            <Link to='/redux/signin' style={{ 'color': 'white' }}>
                <NavItem>
                    Sign In
                </NavItem>
            </Link>
        </Navbar>
    )
}

export default Nav

const Navbar = styled.div`
    height:10vh;
    min-width:100%;
    min-height:100%;
    background:#323232;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0px 35rem;
`

const NavItem = styled.div`
    color:#FDEBF7;
    font-size:1.2rem;
    height:auto;
    &:hover{
        transform:scale(1.03)
    }
`