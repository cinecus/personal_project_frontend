import React from 'react'
import { Link as LinkS } from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

import {FaTimes} from 'react-icons/fa'
import styled from 'styled-components'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/item1">
                        Item1
                    </SidebarLink>
                    <SidebarLink to="/item2">
                        Item2
                    </SidebarLink>
                    <SidebarLink to="/item3">
                        Item3
                    </SidebarLink>
                    <SidebarLink to="/item4">
                        Item4
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.aside`  
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#0d0d0d;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen})=>(isOpen? '100%':'0')};
    top:${({isOpen})=>(isOpen?'0':'-100%')};
    /* top:0; */
`

const CloseIcon = styled(FaTimes)`
    color:#fff;
`

const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor: pointer;
    outline:none;
`

const SidebarWrapper = styled.div`
    color:#fff;
`

const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6,80px);
    text-align:center;
    margin-block-start:0px;
    margin-block-end:0px;
    @media screen and (max-width: 480px){
        grid-template-rows:repeat(6,60px)
    }
`

const SidebarLink = styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition:0.2s ease-in-out;
    text-decoration:none;
    color:#fff;
    cursor: pointer;

    &:hover{
        color:#01bf71;
        transition:0.2s ease-in-out
    }
`

const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;
`

const SidebarRoute = styled(LinkR)`
    border-radius:50px;
    background:#01bf71;
    white-space:nowrap;
    padding:16px 64px;
    color:#010606;
    font-size:16px;
    outline:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition:all 0.2s ease-in-out;
        background:#fff;
        color:#010606;
    }
`