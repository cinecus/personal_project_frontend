import React from 'react'
import '../style/subscription-section-card.css'
import { FiPaperclip, FiCalendar } from 'react-icons/fi'
import { FaChromecast } from 'react-icons/fa'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const SubscriptionSectionCardPage = () => {
    return (
        <div className='subscriptions-wrapper'>
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
        </div>

    )
}

export default SubscriptionSectionCardPage
