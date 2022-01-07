import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterWrapperContainer>
            <div className='footer-title'>
                copyright 2021-2022 by cinecus,All Rights Reserved.
            </div>
        </FooterWrapperContainer>
    )
}

export default Footer

const FooterWrapperContainer = styled.div`
    width:100%;
    height:100px;
    background:rgb(189,189,189);
    vertical-align:middle;
    .footer-title{
        padding-top:40px;
        text-align:center;
        color:#ffffff;
    }
`
