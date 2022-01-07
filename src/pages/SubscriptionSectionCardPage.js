import React from 'react'
import { FiPaperclip, FiCalendar } from 'react-icons/fi'
import { FaChromecast } from 'react-icons/fa'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import styled from 'styled-components'

const SubscriptionSectionCardPage = () => {
    return (
        <Wrapper>
            <div className='box-1'></div>
            <div className='box-2'>
                <div className='subscriptions'>
                    <div style={{ "fontFamily": "Merriweather", "fontStyle": "normal", "fontSize": "24px", "lineHeight": "30px", "color": "#1E1D4E" }}>
                        <strong>Subscriptions</strong>
                    </div>
                    <div style={{ "fontFamily": "Poppins", "fontStyle": "normal", "fontSize": "16px", "lineHeight": "24px", "color": "#1E1D4E", "textAlign": "center" }}>
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
                <div className='user-container'>
                    <MdKeyboardArrowLeft size={'45px'} style={{ 'marginTop': '-10px' }}></MdKeyboardArrowLeft >
                    <div className='user-card'>
                        <div className='user-image'></div>
                        <div className='user-info'>
                            Username
                            <p>Position</p>
                        </div>
                        <div className='btn'>View content</div>
                    </div>
                    <div className='user-card'>
                        <div className='user-image'></div>
                        <div className='user-info'>
                            Username
                            <p>Position</p>
                        </div>
                        <div className='btn'>View content</div>
                    </div>
                    <div className='user-card'>
                        <div className='user-image'></div>
                        <div className='user-info'>
                            Username
                            <p>Position</p>
                        </div>
                        <div className='btn'>View content</div>
                    </div>
                    <MdKeyboardArrowRight size={'45px'} style={{ 'marginTop': '-10px' }} />
                </div>
            </div>
        </Wrapper>

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
    width: auto;
    height: 260px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 75px;
    margin-right: 75px;
  }
  
  .user-card {
    width: 240px;
    height: 260px;
    padding: -24px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
  
  .user-image {
    width: 90px;
    height: 90px;
    background: #1e1d4e;
    border-radius: 50%;
    margin-bottom: 16px;
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