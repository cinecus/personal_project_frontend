import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { quiz } from '../../constant/just_quiz_data'
import trophy from '../../assets/trophy.svg'

const JustQuizPages = () => {
  const [event, setEvent] = useState('ready')
  const [mark, setMark] = useState(0)
  const [point, setPoint] = useState(0)
  const handleAnswer = (e, value, index) => {
    console.log('index', index)
    console.log('first', value.choice)
    console.log('first', quiz[index].answer)

    console.log('va', value.choice === quiz[index].answer)

    if (value.choice === quiz[index].answer) {
      setPoint(point + 1)
    }
    if (mark < quiz.length - 1) {
      setMark(mark + 1)
    } else {
      setEvent('end')
    }
  }
  return (
    <Wrapper>
      {
        event === 'ready' && <Card>
          <div className='title'>
            Just Quiz
          </div>
          <div className='subtitle'>
            Simple question that you can answer it.
          </div>
          <Button onClick={() => setEvent('start')}>
            Start
          </Button>
        </Card>
      }
      {
        event === 'start' && <Question>
          {<>

            <div className='count'>
              {mark + 1}/{quiz.length}
            </div>
            <div className='question'>
              Q{mark + 1}: {quiz[mark].question}
            </div>
            <div className='image-container'>
              <img src={quiz[mark].image} placeholder='image question' />
            </div>
            <div className='option-container'>
              {
                quiz[mark].option.map((el, i) => (<div className='option' key={i} onClick={(e) => handleAnswer(e, el, mark)}>
                  {el.text}
                </div>))
              }
            </div>
          </>
          }
        </Question>
      }
      {
        event === 'end' && <Question style={{ width: '50vw', justifyContent: 'center' }}>
          <div style={{ 'fontSize': '2rem' }}>
            Congrats
          </div>
          <img src={trophy} placeholder='trophy' width={200} height={200}></img>
          <div style={{ 'fontSize': '2rem' }}>
            Your Score : {point} Point
          </div>
          <div className='button-container'>
            <Button onClick={() => {
              setEvent('ready')
              setMark(0)
              setPoint(0)
            }}>
              Back to Home
            </Button>
          </div>

        </Question>
      }
    </Wrapper>
  )
}

export default JustQuizPages

const Wrapper = styled.div`
  width:100vw;
  height:100vh;
  background:#BFA2DB;
  display:flex;
  justify-content:center;
  align-items:center;
`

const Card = styled.div`
  width:50vw;
  height:60vh;
  background:#F0D9FF;
  padding:0rem 5rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:5px;
  .container{
    background:#F3F1F5;
    width:100%;
    height:80%;
  }
  .title{
    text-align:center;
    font-size:3rem;
    font-weight:bold;
  }
  .subtitle{
    font-size:1.8rem;
  }
`

const Button = styled.button`
  width:10rem;
  height:3rem;
  font-weight:bold;
  color:#Fff;
  border-radius:10px;
  background:#7F7C82;
`

const Question = styled.div`
  width:65vw;
  height:75vh;
  background:#F3F1F5;
  border-radius:5px;
  display:flex;
  padding:3rem 5rem;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  position: relative;
  .question{
    text-align:center;
    font-size:1.4rem;
    font-weight:bold;
  }
  .image-container{
    width:51.5rem;
    height:30rem;
    max-height:50%;
    background:#fff;
    border-radius:10px;
    img{
      width:100%;
      height:100%;
      border-radius:10px;
    }
  }
  .option-container{
    display:grid;
    grid-template-columns:25rem 25rem;
    grid-template-rows: 4.5rem 4.5rem;
    gap:1rem;
  }
  .option{
    margin-top:1.5rem;
    width:100%;
    height:100%;
    background:#adabba;
    font-size:1.2rem;
    color:#fff;
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .option:hover{
    cursor: pointer;
    transition: ease-out 0.1s;
    transform:scale(1.01);
    opacity:0.8;
  }
  .count{
    position:absolute;
    color:#969696;
    right:3%;
    top:5%;
    font-size:1rem;
  }
  .button-container{
    display:flex;
    justify-content:space-between;
  }
`