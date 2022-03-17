import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import coins from '../../utils/data/coins.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Loading } from '../../components';
import axios from 'axios';


const DndPage_2 = () => {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState('')
    const onChangeAction = (e) => {
        setItem(e.target.value)
    }
    const [rows, setRows] = useState([
        {
            id: 'ULTRA RARE',
            label: "ULTRA RARE",
            urls: []
        },
        {
            id: 'RARE',
            label: "RARE",
            urls: []
        },
        {
            id: 'UNCOMMON',
            label: "UNCOMMON",
            urls: []
        },
        {
            id: 'COMMON',
            label: "COMMON",
            urls: []
        },
        {
            id: 'Unranked',
            label: "Unranked",
            urls: ["A", "B", "C", "D", "E"]
        },
    ])
    const handleAddItem = () => {
        const tempRow = [...rows]
        let find_item = tempRow.find(el => el.id == 'Unranked')
        find_item.urls = [...find_item.urls, item]
        setRows(tempRow)
        setItem('')
    }
    return (
        <DragDropContext
            onDragEnd={({ destination, source }) => {
                // // dropped outside the list
                if (!destination) {
                    return;
                }
                setRows(reorderRows(rows, source, destination));
            }}
        >
            <Wrapper>
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

                <div style={{ 'marginTop': '20px' }}>
                    {/* <searchItem type='search' name='item' onChange={(e) => onChangeAction(e)} /> */}
                    <input type='search' className='search-coin' style={{ 'marginRight': '20px' }} name='item' onChange={(e) => onChangeAction(e)} value={item} onKeyPress={(e) => e.key == 'Enter' && handleAddItem()} />
                    <button className='btn' onClick={handleAddItem}>Add Item</button>
                </div>
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
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
    };

    return (
        <Droppable
            droppableId={listId}
            type={listType}
            direction="horizontal"
            isCombineEnabled={false}
        >
            {
                dropProvided => (
                    row.label === 'Unranked' ?
                        <div {...dropProvided.droppableProps}>
                            <InputContainer style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <UnRank ref={dropProvided.innerRef} >
                                    {
                                        row.urls.map((url, index) => (
                                            <Draggable key={url} draggableId={url} index={index}>
                                                {dragProvided => (
                                                    <Card {...dragProvided.dragHandleProps}
                                                        {...dragProvided.draggableProps}
                                                        ref={dragProvided.innerRef}>
                                                        {/* <img src={url} /> */}
                                                        {url}
                                                    </Card>

                                                )}
                                            </Draggable>
                                        ))
                                    }

                                    {dropProvided.placeholder}
                                </UnRank>
                                {/* <div className='coin'>
                                </div> */}

                            </InputContainer>
                        </div>
                        :
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
                                                    {url}
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
        </Droppable >
    )
}



export default DndPage_2

const Wrapper = styled.div`
    width:100%;
    height:100vh;
    background:#F7F7E8;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    user-select: none;
    .search-coin{
        width:120px;
        height:40px;
        border-radius:5px;
    }
    .btn{
        width:100px;
        height:40px;
        border-radius:5px;
        background:black;
        color:white;
    }
`
const Tier = styled.div`
    width:950px;
    height:100px;
    background:#C7CFB7;
    margin: 10px 0px 10px 50px;
    border-radius:0 10px 10px 0;
    display:flex;
    flex-wrap:wrap;
`

const Circle = styled.div`
    width:100px;
    height:100px;
    background:#9DAD7F;
    color:#eee;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    text-align:center;
    border-radius:10px 0 0 10px;
    position: absolute;
    margin-left:-100px;
`

const UnRank = styled.div`
    width:1050px;
    height:100px;
    margin: -20px 0px 0px -50px;
    background:rgba(236,179,101,0.2);
    display:flex;
    flex-wrap:wrap;
`

const Card = styled.div`
    width:100px;
    height:100%;
    background:#557174;
    margin-left:2.5px;
    margin-right:2.5px;
    margin-bottom:20px;
    border-radius:50%;
    box-shadow: 0px 2px 20px 3px rgba(5, 5, 5, 0.1);
    opacity: 1 !important;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#eeee;
    img{
        width:100%;
        height:100%;
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

const InputContainer = styled.div`
    display:flex;
    width:1000px;
    justify-content:center;
    margin-top:30px;
    .coin{
        width:100px;
        height:100px;
        margin-left:10px;
        margin-right:10px;
        border-radius:50%;
        background:#969696;
    }
    
`