import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";

const TestPage = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
    };
    return (
        <Slider style={{ 'display': 'flex' }} {...settings}>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
        </Slider>
    )
}

export default TestPage

const Container = styled.div`
    display:flex;
`

const Item = styled.div`
    background:rgba(255,30,30,0.5);
    padding:100px;
    color:#ffffff;
    text-align:center;
`