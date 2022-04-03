import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { icons } from '../../../constant/responsive_data'
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SecondSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        prevArrow: <MdKeyboardArrowLeft />,
        nextArrow: <MdKeyboardArrowRight />
    };
    const [size, setSize] = useState(window.innerWidth);
    const [show,setShow] = useState(false);

    const checkSize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", checkSize);
        if (+size > 768) {
            setShow(false);
        } else {
            setShow(true);
        }
        return () => {
            window.removeEventListener("resize", checkSize);
        };
    }, [size]);
    return (
    <Container id='section2'>
        <Section>
            <Title>
                Second Section
            </Title>
            <Underline/>
            <GridContainer>
                {
                    show? <Slider className='container' {...settings} >
                    {
                        icons.map((el,i)=>{
                            return <GridItem key={i}>
                                <>
                                {el.icon}
                                </>
                                {/* {el.title} */}
                            </GridItem>
                        })
                    }
                    </Slider> : 
                    <>
                        {
                            icons.map((el,i)=>{
                                return <GridItem key={i}>
                                    <>
                                    {el.icon}
                                    </>
                                    {el.title}
                                </GridItem>
                            })
                        }
                    </>
                }
                
            </GridContainer>
        </Section>
    </Container>
  )
}

export default SecondSection

const Container = styled.div`
    width:100vw;
    height:100%;
    background:#000;
`
const Section = styled.div`
    width:100%;
    margin:0 auto;
    padding:2rem;
`

const Title = styled.div`
    font-size:2.5rem;
    color:#fff;
    text-align:center;
    font-weight:500;
`

const Underline = styled.div`
    width:20rem;
    height:3px;
    border-radius:50%;
    background:blueviolet;
    margin:0 auto 1rem;
`

const GridContainer = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    padding:2rem 8rem;
    gap: 3rem;
    .container {
    width: 100%;
    display: flex;
    }
    .slick-prev, .slick-next {
    color: #fff !important;
    transform:scale(1.5);
    }
    @media screen and (max-width: 768px){
        padding:0rem 2rem;
        gap: 3rem;
    }
`

const GridItem = styled.div`
    flex-grow:0;
    max-width:12.5%;
    flex-basis:12.5%;
    color:#fff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media screen and (max-width: 768px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`