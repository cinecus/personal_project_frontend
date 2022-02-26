import React, { useState,useCallback } from 'react'
import styled, { css } from 'styled-components'
import {css_data} from '../../constant/css_battle_data'
import { Select,Spin  } from 'antd';

const { Option } = Select;

const CSSBattlePage = () => {
  const [content,setContent] = useState(css_data)
  const [loading,setLoading] = useState(false)
  const onChange=useCallback((value)=> {
    console.log('value', value)
    setLoading(true)
    if(value==='all'){
      setContent(css_data)
      setLoading(false)
    } else{
      const temp_content = content.filter((el,i)=>{
        return el.battle_group_number == value
      })
      console.log('temp_content', temp_content)
      setContent(temp_content)
      setTimeout(()=>{
        setLoading(false)
      },2000)
    }
    
  },[content])
  return (
    <>
    <Wrapper>
      <Header>
      MY CSS BATTLE
      </Header>
      {/* <Select
    placeholder="Select Battle"
    onChange={onChange}
  >
    <Option value="all">All Battle</Option>
    {
  Array(17).fill(0).map((el,i)=>{
    return (<Option value={i+1}>
      Battle #{i+1}
      </Option>)
    })
    }
    
  </Select> */}
      <ContainerGrid>
        {loading?<Spin></Spin>:(content.length>0?content.map((elem,index)=>{
          return <Card key={index}>
            <a href={elem.url} target='_blank' style={{'textDecoration':'none'}}>
            <div className='card-image'>
              {elem.render()}
            </div>
            <div className='title'>#{elem.battle_number} {elem.battle_name}</div>
            <div className='color-palette'>
              {elem.color_pallate.map((el)=>{
                  return (<div className='container'>
                  <div className='circle' style={{'background':el}}></div>
                  <div className='text'>{el}</div>
                  </div>
                  
                  )
              })
            }
            </div>
            </a>
          </Card>
        }):<h1>No Content</h1>)}
      </ContainerGrid>
    </Wrapper>
    </>
  )
}

export default CSSBattlePage

const Wrapper = styled.div`
  display:flex;
  align-items:center;
  width:100vw;
  height:100%;
  padding-bottom:3rem;
  background:#000000;
  flex-direction:column;
  overflow-x:hidden;
`

const Header = styled.div`
  padding-top:2rem;
  font-size:34px;
  color:#FEE440;
`

const ContainerGrid = styled.div`
  width:80vw;
  max-width:1400px;
  display:grid;    
  gap:3rem 3rem;
  margin:3rem auto 0;
  //grid-template-columns: 80px 200px auto 30px;
  grid-template-columns: repeat(auto-fill,minmax(330px,1fr));
`
const Card = styled.div`
  width:400px;
  height:400px;
  box-shadow: 0px 2px 20px 3px rgba(5, 5, 5, 0.1);
  color:#000;
    transition:0.3s ease-in-out all;
    &:hover{
        transform:scale(1.05);
        cursor:pointer;
    }
  .card-image{
    width:100%;
    height:75%;
    background:#fdc57b;
  }
  .title{
    width:100%;
    height:10%;
    background:darkgray;
    text-align:center;
    padding-top:5px;
    font-size:20px;
    color:#000;
  }
  .color-palette{
    width:100%;
    height:15%;
    background:darkgray;
    display:grid;    
    gap:0.5rem 1rem;
    margin:-1px auto 0;
    grid-template-columns: 30% 30% 30%;
    .container{
      display:flex;
      margin:-5px auto 5px;
      min-height:100%;
      .circle{
      width:20px;
      height:20px;
      border-radius:50%;
      background:#000;
    }
    .text{
      font-size:18px;
      color:#000;
    }

    } 
  }
  
`
