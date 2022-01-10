import React, { useState, useRef } from 'react'
import { FiPaperclip, FiCalendar } from 'react-icons/fi'
import { FaChromecast } from 'react-icons/fa'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import styled from 'styled-components'
import { subscription } from '../utils/data/subscription'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SubscriptionSectionCardPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <MdKeyboardArrowLeft />,
    nextArrow: <MdKeyboardArrowRight />
  };
  return (
    <Wrapper>
      <div className='box-1'></div>
      <div className='box-2'>
        <div className='subscriptions'>
          <div style={{ "fontStyle": "normal", "fontSize": "24px", "lineHeight": "30px", "color": "#1E1D4E" }}>
            <strong>Subscriptions</strong>
          </div>
          <div style={{ "fontStyle": "normal", "fontSize": "16px", "lineHeight": "24px", "color": "#1E1D4E", "textAlign": "center" }}>
            Support these creators by purchasing their monthly subscriptions, and get access to premium content:
          </div>
          <div className='tags-container'>
            <div className='tag'>
              <FiPaperclip /> Source files
            </div>
            <div className='tag'>
              <FaChromecast /> Live streams
            </div>
            <div className='tag'>
              <FiCalendar /> Meetup
            </div>
          </div>
        </div>
        <Slider className='user-container' {...settings} >
          {
            subscription.map(item => {
              const { id, name, position, image } = item
              return <Card key={id}>
                <div className='user-image'>
                  <img src={image} alt={name} />
                </div>
                <div className='user-info'>
                  {name}
                  <p>{position}</p>
                </div>
                <div className='btn'>View</div>
              </Card>
            })
          }
        </Slider>
      </div>
    </Wrapper >

  )
}

export default SubscriptionSectionCardPage

const Wrapper = styled.div`
    display: flex;
    background: #f2f2fb;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    
.box-1 {
    width: 900px;
    height: 675px;
    background: #21204c;
    border-radius: 24px;
    position: absolute;
    z-index: 1;
  }
  
  .box-2 {
    width: 1000px;
    height: 600px;
    background: #ffffff;
    border-radius: 24px;
    position: absolute;
    z-index: 2;
    box-shadow: 30px 4px 84px rgba(22, 20, 96, 0.16);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .subscriptions {
    width: 429px;
    height: 158px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 54px 0px;
  }
  
  .tags-container {
    display: flex;
    width: 429px;
    justify-content: space-between;
  }
  
  .tag {
    width: auto;
    height: 25px;
    background: #f3f2fb;
    border-radius: 20px;
    padding: 4px 8px 4px 8px;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  
  .user-container {
    width: 80%;
    height: 260px;
    display: flex;
    .slick-prev, .slick-next {
    color: #09529b !important;
    transform:scale(1.5);
    }
  }
  
`

const Card = styled.div`
    width: 240px;
    height: 260px;
    padding: -24px;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .user-image {
    width: 90px;
    height: 90px;
    background: #1e1d4e;
    border-radius: 50%;
    margin-bottom: 16px;
    img{
      width:100%;
      height:100%;
      border-radius: 50%;
      margin-bottom: 16px;
    }
  }
  
  .btn {
    width: 125px;
    height: 37px;
    background: #1e1d4e;
    border-radius: 29px;
    color: #ffffff;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  
  .user-info {
    font-size: 18px;
    text-align: center;
    color: #1e1d4e;
    margin-bottom: 10px;
  }
  
  .user-info p {
    font-size: 14px;
    text-align: center;
    color: #1e1d4e;
    margin-top: 5px;
  }
`

const Item = styled.div`
  overflow:hidden;
  text-align: center;
  background: #eca;
  padding:10px;
`