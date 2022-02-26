import React from 'react'
import styled from 'styled-components'

const GridPage_1 = () => {
    return (
        <Container>
            <Header>Header</Header>
            <Menu>Menu</Menu>
            <Main>Main</Main>
            <Right>Right</Right>
            <Footer>Footer</Footer>
        </Container>
    )
}

export default GridPage_1

const Container = styled.div`
    display:grid;
    grid-template-areas:'header header header header header'
                        'menu main main main right'
                        'menu footer footer footer footer';
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin:0 0px;
`

const Item = styled.div`
    background:rgba(255,30,30,0.5);
    padding:100px;
    color:#ffffff;
    text-align:center;
`

const Header = styled(Item)`
    grid-area:header;
`
const Menu = styled(Item)`
    grid-area:menu;
`
const Main = styled(Item)`
    grid-area:main;
`
const Right = styled(Item)`
    grid-area:right;
`
const Footer = styled(Item)`
    grid-area:footer;
`