import React, { useState } from 'react'
import styled from 'styled-components'
// import { DraggableLocation } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';

const DndPage_2 = () => {
    const [rows, setRows] = useState([
        {
            id: 'A',
            label: "A",
            urls: ["https://s2.coinmarketcap.com/static/img/coins/64x64/12973.png",
                "https://s2.coinmarketcap.com/static/img/coins/64x64/16444.png",
                "https://s2.coinmarketcap.com/static/img/coins/64x64/11770.png",
                "https://s2.coinmarketcap.com/static/img/coins/64x64/12854.png",
                "https://s2.coinmarketcap.com/static/img/coins/64x64/14109.png",
                "https://s2.coinmarketcap.com/static/img/coins/64x64/14621.png",
                "https://s2.coinmarketcap.com/static/img/coins/64x64/17018.png",]
        },
        {
            id: 'B',
            label: "B",
            urls: []
        },
        {
            id: 'C',
            label: "C",
            urls: []
        },
        {
            id: 'D',
            label: "D",
            urls: []
        },
        {
            id: 'Unranked',
            label: "Unraned",
            urls: []
        },
    ])
    console.log(`rows`, rows)
    return (
        <DragDropContext
            onDragEnd={({ destination, source }) => {
                // // dropped outside the list
                console.log(`source`, source)
                if (!destination) {
                    return;
                }
                setRows(reorderRows(rows, source, destination));
            }}
        >
            <Wrapper>
                {/* <Tier>
                    <Circle></Circle>
                </Tier>
                <Tier>
                    <Circle></Circle>
                </Tier>
                <Tier>
                    <Circle></Circle>
                </Tier>
                <Tier>
                    <Circle></Circle>
                </Tier>
                <Tier>
                    <Circle></Circle>
                </Tier> */}
                {
                    rows.map((row) => (
                        <List
                            internalScroll
                            key={row.id}
                            listId={row.id}
                            listType="CARD"
                            row={row} />
                    ))
                }
            </Wrapper >

        </DragDropContext>
    )
}
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const reorderRows = (rows, source, destination) => {
    const current = rows.find(x => x.id === source.droppableId)
    const next = rows.find(x => x.id === destination.droppableId)
    const target = current.urls[source.index];
    if (source.droppableId === destination.droppableId) {
        const reordered = reorder(current.urls, source.index, destination.index);
        return rows.map(x => (x.id === current.id ? { ...x, urls: reordered } : x))
    }
    current.urls.splice(source.index, 1);
    next.urls.splice(destination.index, 0, target);
    return rows.map(x => {
        if (current.id === x.id) {
            return {
                ...x,
                urls: current.urls
            }
        } else if (next.id === x.id) {
            return {
                ...x,
                urls: next.urls
            }
        }
        return x;
    })
}

const List = ({ listId, listType, row }) => {
    console.log(row)
    return (
        <Droppable
            droppableId={listId}
            type={listType}
            direction="horizontal"
            isCombineEnabled={false}
        >
            {
                dropProvided => (
                    <div {...dropProvided.droppableProps}>
                        <Tier ref={dropProvided.innerRef}>
                            <Circle >{row.label}</Circle>
                            {
                                row.urls.map((url, index) => (
                                    <Draggable key={url} draggableId={url} index={index}>
                                        {dragProvided => (
                                            <Card {...dragProvided.dragHandleProps}
                                                {...dragProvided.draggableProps}
                                                ref={dragProvided.innerRef}>
                                                test # {index}
                                            </Card>

                                        )}
                                    </Draggable>
                                ))
                            }
                            {dropProvided.placeholder}
                        </Tier>
                    </div>
                )
            }
        </Droppable>
    )
}



export default DndPage_2

const Wrapper = styled.div`
    width:100%;
    height:100vh;
    background:#041C32;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Tier = styled.div`
    width:950px;
    height:100px;
    background:#ECB365;
    margin: 10px 0px 10px 50px;
    border-radius:10px;
    display:flex;
    flex-wrap:wrap;
    
`

const Circle = styled.div`
    width:100px;
    height:100px;
    background:#064663;
    color:#04293A;
    font-size:64px;
    text-align:center;
    border-radius:50px 0 0 50px;
    position: absolute;
    margin-left:-100px;
`

const UnRank = styled.div`
    width:100%;
    height:100px;
    background:rgba(236,179,101,0.2);
    margin-top:30px;
    display:flex;
    flex-wrap:nowrap;
`

const Card = styled.div`
    width:100px;
    height:100%;
    background:#969696;
    margin-left:2.5px;
    margin-right:2.5px;
    margin-bottom:20px;
    display:flex;
    flex-direction:column;
    border-radius:10px 10px 10px 10px;
    box-shadow: 0px 2px 20px 3px rgba(5, 5, 5, 0.1);
    opacity: 1 !important;
    .image-card{
            width:100%;
            height:80%;
            background: #000;
            img{
                border-radius:10px 10px 0px 0px;
                width:100%;
                height:100%;
            }
        }
    .content-card{
            width:100%;
            height:20%;
            background: #ffff;
            border-radius:0px 0px 10px 10px;
            text-align:center
    }
    :hover{
        cursor: pointer;
    }
`