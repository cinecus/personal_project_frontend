import React, { useRef } from 'react'
import styled from 'styled-components'
import { useSprings, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash.clamp'
import swap from 'lodash-move'

const fn = (order, active = false, originalIndex = 0, curIndex = 0, y = 0) => (index) =>
    active && index === originalIndex
        ? {
            y: curIndex * 50 + y,
            scale: 1.1,
            zIndex: 1,
            shadow: 15,
            immediate: (key) => key === 'y' || key === 'zIndex',
        }
        : {
            y: order.indexOf(index) * 50,
            scale: 1,
            zIndex: 0,
            shadow: 1,
            immediate: false,
        }

function DraggableList({ items }) {
    const order = useRef(items.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
    const [springs, api] = useSprings(items.length, fn(order.current)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.
    const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
        const curIndex = order.current.indexOf(originalIndex)
        const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
        const newOrder = swap(order.current, curIndex, curRow)
        api.start(fn(newOrder, active, originalIndex, curIndex, y)) // Feed springs new style data, they'll animate the view without causing a single render
        if (!active) order.current = newOrder
    })
    return (
        <Content style={{ height: items.length * 50 }}>
            {springs.map(({ zIndex, shadow, y, scale }, i) => (
                <animated.div
                    {...bind(i)}
                    key={i}
                    style={{
                        zIndex,
                        boxShadow: shadow.to(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
                        y,
                        scale,
                    }}
                    children={items[i]}
                />
            ))}
        </Content>
    )
}
const DndPage = () => {

    return (
        <Container>
            <DraggableList items={'Lorem ipsum dolor sit BOBO COCO'.split(' ')} />
        </Container>
    )
}


export default DndPage

const Container = styled.div`
    background: #f0f0f0;
    cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39,    auto;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
`

const Content = styled.div`
    position: relative;
    width: 200px;
    height: 100px;
    & > div{
    position: absolute;
    width: 200px;
    height: 40px;
    transform-origin: 50% 50% 0px;
    border-radius: 5px;
    color: white;
    line-height: 40px;
    padding-left: 32px;
    font-size: 14.5px;
    background: lightblue;
    text-transform: uppercase;
    letter-spacing: 2px;
    touch-action: none;
    }
    & > div:nth-child(1) {
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
}
& > div:nth-child(2) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
& > div:nth-child(3) {
  background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%);
}
& > div:nth-child(4) {
  background: linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%);
}
`