import React from 'react'
import styled from 'styled-components'
import { Tabs } from 'antd';
import {tab_icon} from '../../../constant/responsive_data'
const { TabPane } = Tabs;

const SeventhSection = () => {
  return (
    <Container id='section5'>
        <Section>
            <Title>This is Tabs Title</Title>
            <Underline/>
        <Tabs defaultActiveKey="1"  tabBarGutter={100} size={'large'} centered>
        <TabPane tab="This is Tab #1" key="1">
            <GridContainer>
            {
                tab_icon.filter(el=>el.tab==1).map((el,i)=>{
                    return <GridItem key={i}>
                        <div className='icon'>
                            {el.icon}
                        </div>
                        <div className='title'>
                            {el.title}
                        </div>
                    </GridItem>
                })
            }
            </GridContainer>
        </TabPane>
        <TabPane tab="This is Tab #2" key="2">
        <GridContainer>
            {
                tab_icon.filter(el=>el.tab==2).map((el,i)=>{
                    return <GridItem key={i}>
                        <div className='icon'>
                            {el.icon}
                        </div>
                        <div className='title'>
                            {el.title}
                        </div>
                    </GridItem>
                })
            }
            </GridContainer>
        </TabPane>
        <TabPane tab="This is Tab #3" key="3">
        <GridContainer>
            {
                tab_icon.filter(el=>el.tab==3).map((el,i)=>{
                    return <GridItem key={i}>
                        <div className='icon'>
                            {el.icon}
                        </div>
                        <div className='title'>
                            {el.title}
                        </div>
                    </GridItem>
                })
            }
            </GridContainer>
        </TabPane>
  </Tabs>
        </Section>
    </Container>
  )
}

export default SeventhSection

const Container = styled.div`
    width:100vw;
    height:100%;
`

const Section = styled.div`
    width:100%;
    margin:0 auto;
    padding:4rem 2rem;
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn ,.ant-tabs-ink-bar{
        //color:#fff !important;
        color:blueviolet !important;
        
    }
    .ant-tabs-ink-bar{
        background:blueviolet !important;
    }
   
    
`

const GridContainer = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    padding:2rem 8rem;
    gap:1rem;
    position:relative;
    @media screen and (max-width: 768px){
        padding:0rem 2rem;
    }
`

const Underline = styled.div`
    width:20rem;
    height:3px;
    border-radius:50%;
    background:blueviolet;
    margin:0 auto;
    margin-bottom:1rem;
`

const Title = styled.div`
    font-size:1.8rem;
    font-weight:600;
    text-align:center;
`

const GridItem = styled.div`
    flex-grow:0;
    max-width:22%;
    flex-basis:22%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1rem;
    .icon{
        width:3rem;
        height:3rem;
        border-radius:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        color:#000;
    }
    .title{
        font-size:1.2rem;
        color:#000;
    }
    @media screen and (max-width: 768px){
        max-width:45%;
        flex-basis:45%;
    }
`