import React from 'react'
import styled from 'styled-components'
import CSSBattle from './css_battle_class'

export const css_data = [
    {
        battle_name: 'Simply Square',
        battle_group_number: 1,
        battle_number: 1,
        color_pallate: ['#5D3A3A', '#B5E0BA'],
        url: 'https://cssbattle.dev/play/1',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='box'></div>
                </>), styled.body`
            min-width:100%;
            min-height:100%;
            background:#5d3a3a;
            margin:0px;
            .box{
            width:200px;
            height:200px;
            background:#b5e0ba;
            }
        `)).renderHTML()
        }
    },
    {
        battle_name: 'Carrom',
        battle_group_number: 1,
        battle_number: 2,
        color_pallate: ['#62374E', '#FDC57B'],
        url: 'https://cssbattle.dev/play/2',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='container'>
                        <div class='box'></div>
                        <div class='box'></div>
                    </div>
                    <div class='container'>
                        <div class='box'></div>
                        <div class='box'></div>
                    </div>
                </>), styled.body`
            min-width:100%;
            min-height:100%;
            background:#62374e;
            margin:0;
            .container{
            display:flex;
            justify-content:space-between;
            padding:50px;
            }
            .box{
            width:50px;
            height:50px;
            background:#fdc57b;
            }
        `)).renderHTML()
        }
    },
    {
        battle_name: 'Push Button',
        battle_group_number: 1,
        battle_number: 3,
        color_pallate: ['#6592CF', '#243D83', '#EEB850'],
        url: 'https://cssbattle.dev/play/3',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='reg'>
                        <div class='cir1'>
                            <div class='cir2'>
                                <div class='cir3'></div>
                            </div>
                        </div>
                    </div>
                </>), styled.body`
            min-width:100%;
            min-height:100%;
            background:#6592CF;
            display:flex;
            justify-content:center;
            align-items:center;
            margin:0;
            .reg{
            width:300px;
            height:150px;
            background:#243D83;
            display:flex;
            justify-content:center;
            align-items:center;
            }
            .cir1{
            width:250px;
            height:250px;
            background:#6592CF;
            border-radius:50%;
            display:flex;
            justify-content:center;
            align-items:center;
            }
    .cir2{
    width:150px;
    height:150px;
    background:#243D83;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    }
    .cir3{
    width:50px;
    height:50px;
    background:#EEB850;
    border-radius:50%;
    }
        `)).renderHTML()
        }
    },
    {
        battle_name: 'Ups n Downs',
        battle_group_number: 1,
        battle_number: 4,
        color_pallate: ['#62306D', '#F7EC7D', '#EEB850'],
        url: 'https://cssbattle.dev/play/4',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class="item-bottom"></div>
                    <div class="item-top"></div>
                    <div class="item-bottom"></div>
                </>),
                styled.body`
                min-width:100%;
                min-height:100%;
                background:#62306D;
                margin:0px;
                display:flex;
                justify-content: center;
                .item-top{
    width: 100px;
    height:100px;
    border-radius:60px 60px 0px 0px;
    background:#F7EC7D;
    margin-top:50px
    }
    .item-bottom{
    width: 100px;
    height:100px;
    border-radius:0px 0px 60px 60px;
    background:#F7EC7D;
    margin-top:150px
    }
                `)).renderHTML()
        }
    },
    {
        battle_name: 'Acid Rain',
        battle_group_number: 1,
        battle_number: 5,
        color_pallate: ['#0B2429', '#F3AC3C', '#998235'],
        url: 'https://cssbattle.dev/play/5',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class="item1"></div>
                    <div class="item2"></div>
                    <div class="item3"></div>
                </>),
                styled.body`
                min-width:100%;
                min-height:100%;
                margin:0px;
    background: #0B2429;
    display:flex;
    justify-content:center;
    align-items:center;
    .item1{
    width:120px;
    height:120px;
    background:#998235;
    position:absolute;
    border-radius:60px 0px 60px 0px;
    }
    .item2{
    width:120px;
    height:120px;
    margin-left:-120px;
    margin-top:120px;
    background:#F3AC3C;
    position:absolute;
    border-radius:60px 0px 60px 60px;
    }
    .item3{
    width:120px;
    height:120px;
    background:#F3AC3C;
    margin-right:-120px;
    margin-top:-120px;
    border-radius:60px 60px 60px 0px;
    
    }
                `)).renderHTML()
        }
    },
    {
        battle_name: 'Missing Slice',
        battle_group_number: 1,
        battle_number: 6,
        color_pallate: ['#E3516E', '#F7F3D7', '#51B5A9', '#FADE8B'],
        url: 'https://cssbattle.dev/play/6',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class="item1"></div>
                    <div class="item2"></div>
                    <div class="item3"></div>
                </>),
                styled.body`
                min-width:100%;
                min-height:100%;
                margin:0px;
    background: #E3516E;
    display:flex;
    justify-content:center;
    align-items:center;
    .item1{
    width:100px;
    height:100px;
    background:#51B5A9;
    position:absolute;
    margin-top:-100px;
    margin-left:-100px;
    border-radius:100px 0px 0px 0px;
    }
    .item2{
    width:100px;
    height:100px;
    margin-left:-100px;
    margin-top:100px;
    background:#F7F3D7;
    position:absolute;
    border-radius:0px 0px 0px 100px;
    }
    .item3{
    width:100px;
    height:100px;
    background:#FADE8B;
    margin-right:-100px;
    margin-top:-100px;
    border-radius:0px 100px 0px 0px;
    
    }
                `)).renderHTML()
        }
    },
    {
        battle_name: 'Leaf Trail',
        battle_group_number: 1,
        battle_number: 7,
        color_pallate: ['#0B2429', '#F3AC3C', '#998235', '#1A4341'],
        url: 'https://cssbattle.dev/play/7',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class="item1"></div>
                    <div class="item2"></div>
                    <div class="item3"></div>
                </>),
                styled.body`
                min-width:100%;
                min-height:100%;
                margin:0px;
    background: #0B2429;
    display:flex;
    justify-content:center;
    align-items:center;
    .item1{
    width:150px;
    height:150px;
    background:#998235;
    position:absolute;
    border-radius:100px 0 100px 0px;
    z-index:2
    }
    .item2{
    width:150px;
    height:150px;
    background:#1A4341;
    position:absolute;
    border-radius:100px 0 0 0;
    margin-left:-100px;
    z-index:1;
    }
    .item3{
    width:150px;
    height:150px;
    background:#F3AC3C;
    position:absolute;
    border-radius:100px 0 100px 0;
    margin-left:100px;
    z-index:2
    
    }
                `)).renderHTML()
        }
    },
    {
        battle_name: 'Forking Crazy',
        battle_group_number: 1,
        battle_number: 8,
        color_pallate: ['#6592CF', '#060F55'],
        url: 'https://cssbattle.dev/play/8',
        render: () => {
            return (new CSSBattle(
                (<>

                    <div class='box'>
                        <div class='item2'></div>
                        <div class='item3'></div>
                        <div class='item2'></div>
                        <div class='item3'></div>
                        <div class='item2'></div>
                        <div class='item3'></div>
                        <div class='item2'></div>
                    </div>
                    <div class='item1'></div>
                    <div class='item4'></div>

                </>),
                styled.body`
                min-width:100%;
                min-height:100%;
                background: #6592CF;
    margin:0px;
    display:flex;
    justify-content:center;
    align-items:center;
    .item1{
    width:140px;
    height: 100px;
    background:#060F55;
    position:absolute;
    margin-top:100px;
    border-radius:0px 0px 100px 100px;
    z-index:1
    }
    .box{
    width:140px;
    height: 100px;
    position:absolute;
    margin-top:-100px;
    display:flex;
    z-index:2
    }
    .item2{
    height: 100px;
    width:14.29%;
    background:#060F55;
    border-radius: 10px 10px 0px 0px;
    }
    .item3{
    height: 100px;
    width:14.29%;
    background:#6592CF;
    border-radius: 0px 0px 10px 10px;
    margin-top:10px;
    }
    .item4{
    height: 100px;
    width: 20px;
    background:#060F55;
    margin-top:200px;
    z-index:2
    }
                `)).renderHTML()
        }
    },
    {
        battle_name: 'Tesseract',
        battle_group_number: 1,
        battle_number: 9,
        color_pallate: ['#222730', '#4CAAB3', '#393E46'],
        url: 'https://cssbattle.dev/play/9',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='reg'></div>
                    <div class='sqaure'></div>
                    <div class='sqaure2'></div>
                    <div class='circle'></div>
                </>),
                styled.body`
                min-width:100%;
                min-height:100%;
                background: #222730;
    display:flex;
    justify-content:center;
    align-items:center;
    .reg{
    width:410px;
    height:150px;
    background:#4CAAB3;
    position:absolute;
    z-index:2;
    }
    .sqaure{
    width:215px;
    height:215px;
    background:#222730;
    position:absolute;
    transform: rotate(45deg);
    z-index:3;
    }
    .sqaure2{
    width:125px;
    height:125px;
    background:#4CAAB3;
    position:absolute;
    transform: rotate(45deg);
    z-index:4;
    }
    .circle{
    width:50px;
    height:50px;
    background:#393E46;
    position:absolute;
    border-radius:50px;
    z-index:5;
    }
                `)).renderHTML()
        }
    },
    {
        battle_name: 'Cloaked Spirits',
        battle_group_number: 1,
        battle_number: 10,
        color_pallate: ['#62306D', '#F7EC7D', '#AA445F', '#E38F66'],
        url: 'https://cssbattle.dev/play/10',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='reg1'><div class='circle2'></div><div class='circle2'></div></div>
                    <div class='reg2'><div class='circle1'></div></div>
                </>),
                styled.body`
                min-width:100%;
                min-height:100%;
                background: #62306D;
    display:flex;
    justify-content:center;
    align-items:end;
    padding:0;
    margin-bottom:0px;
    .reg1{
    width:300px;
    height:100px;
    background:#F7EC7D;
    position:absolute;
    z-index:1;
    display:flex;
    justify-content:space-between;
    }
    .reg2{
    width:100px;
    height:200px;
    background:#F7EC7D;
    position:absolute;
    display:flex;
    justify-content:center;
    z-index:1;
    }
    .circle1{
    width:60px;
    height:60px;
    background:#AA445F;
    margin-top:-50px;
    border-radius:60px;
    border:20px solid #E38F66;
    }
    .circle2{
    width:60px;
    height:60px;
    background:#E38F66;
    margin-top:-50px;
    border-radius:60px;
    border:20px solid #AA445F;
    }
                `)).renderHTML()
        }
    },
    {
        battle_name: 'Eye of Sauron',
        battle_group_number: 1,
        battle_number: 11,
        color_pallate: ['#191210', '#ECA03D', '#84271C'],
        url: 'https://cssbattle.dev/play/11',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='circle1'></div>
                    <div class='circle2'></div>
                    <div class='item1'><div class='item3'></div></div>
                    <div class='reg1'></div>
                    <div class='item2'><div class='item3'></div></div>
                    <div class='reg2'></div>
                </>),
                styled.body`
                min-width:100%;
                min-height:100%;
                background: #191210;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0;
    margin-bottom:0px;
    .reg1{
    width:300px;
    height:100px;
    background:#F7EC7D;
    position:absolute;
    z-index:1;
    display:flex;
    justify-content:space-between;
    }
    .reg2{
    width:100px;
    height:200px;
    background:#F7EC7D;
    position:absolute;
    display:flex;
    justify-content:center;
    z-index:1;
    }
    .circle1{
    width:140px;
    height:140px;
    margin-top:-8px;
    border-radius:70px;
    background:#ECA03D;
    position:absolute;
    z-index:10;
    }
    .circle2{
    margin-top:-8px;
    width:50px;
    height:50px;
    background:#84271C;
    border-radius:50px;
    border:25px solid #191210;
    position:absolute;
    z-index:11;
    }
    .item1{
    margin-top:-8px;
    width:100px;
    height:100px;
    background:#ECA03D;
    position:absolute;
    margin-left:-200px;
    border-radius:50px;
    z-index:8;
    display:flex;
    justify-content:center;
    align-items:center;
    }
    .item2{
    margin-top:-8px;
    width:100px;
    height:100px;
    background:#ECA03D;
    position:absolute;
    margin-right:-200px;
    border-radius:50px;
    z-index:8;
    display:flex;
    justify-content:center;
    align-items:center;
    }
    .reg1{
    height:50px;
    width:200px;
    background:#191210;
    z-index:9;
    margin-left:-200px;
    margin-top:-58px
    }
    .reg2{
    height:50px;
    width:200px;
    background:#191210;
    z-index:9;
    margin-right:-200px;
    margin-bottom:-42px;
    }
    .item3{
    margin-top:-8px;
    width:59px;
    height:59px;
    border-radius:50px;
    background:#191210;
    }
                `)).renderHTML()
        }
    },
    {
        battle_name: 'Wiggly Moustache',
        battle_group_number: 1,
        battle_number: 12,
        color_pallate: ['#F5D6B4', '#D86F45'],
        url: 'https://cssbattle.dev/play/12',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='circle2'>
                        <div class='circle4' style={{ 'marginTop': '-50px' }}>
                            <div class='circle5' style={{ 'marginLeft': '-80px' }}></div>
                        </div>
                    </div>
                    <div class='circle1'><div class='circle4' style={{ 'marginTop': '50px' }}></div></div>
                    <div class='circle3'><div class='circle4' style={{ 'marginTop': '-50px' }}>
                        <div class='circle5' style={{ 'marginRight': '-80px' }}></div>
                    </div>
                    </div>
                </>),
                styled.body`
                min-width:100%;
                min-height:100%;
                background: #F5D6B4;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0;
    .circle1{
    width:100px;
    height:50px;
    background:#D86F45;
    border-radius:50px 50px 0px 0px;
    margin-top:-50px;
    margin-left:-20px;
    margin-right:-20px;
    display:flex;
    justify-content:center;
    align-items:center;
    }
    .circle2{
    width:100px;
    height:50px;
    background:#D86F45;
    border-radius:0px 0px 50px 50px;
    margin-top:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    }
    .circle3{
    width:100px;
    height:50px;
    background:#D86F45;
    border-radius:0px 0px 50px 50px;
    margin-top:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    }
    .circle4{
    width:60px;
    height:60px;
    background:#F5D6B4;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    }
    .circle5{
    width:20px;
    height:20px;
    background:#D86F45;
    border-radius:50%;
    }
                `)).renderHTML()
        }
    },
    {
        battle_name: 'Totally Triangle',
        battle_group_number: 2,
        battle_number: 13,
        color_pallate: ['#0B2429', '#F3AC3C'],
        url: 'https://cssbattle.dev/play/13',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='tri'></div>
                </>),
                styled.body`
                min-width:100%;
                min-height:100%;
                background: #0B2429;
                display:flex;
                overflow:auto;
    .tri{
    width:200px;
    height:200px;
    background:#F3AC3C;
    transform: rotate(45deg);
    margin-left: -100px;
    margin-top:-100px;
    }
                `)).renderHTML()
        }
    },
    {
        battle_name: 'Vincent De Oliveira',
        battle_group_number: 4,
        battle_number: 22,
        color_pallate: ['#F5D6B4', '#D86F45'],
        url: 'https://cssbattle.dev/play/22',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='circle1'></div>
                    <div class='circle2'></div>
                    <div class='reg'></div>
                </>),
                styled.body`
                min-width:100%;
                min-height:100%;
                background: #F5D6B4;
    display:flex;
    justify-content:center;
    align-items:center;
    .circle1{
    width:100px;
    height:100px;
    background:#D86F45;
    border-radius:50%;
    margin-top:30px;
    margin-left:-100px;
    position:absolute;
    }
    .circle2{
    width:100px;
    height:100px;
    background:#D86F45;
    border-radius:50%;
    margin-top:-30px;
    margin-left:60px;
    position:absolute;
    }
    .reg{
    width:150px;
    height:50px;
    background:#D86F45;
    position:absolute;
    margin-top:80px;
    margin-right:-50px;
    border-radius:0px 30px 30px 0px;
    }
                `)).renderHTML()
        }
    },
    {
        battle_name: 'Boxception',
        battle_group_number: 4,
        battle_number: 23,
        color_pallate: ['#F3AC3C', '#1A4341', '#998235'],
        url: 'https://cssbattle.dev/play/23',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='sq1'><div class='sq2'><div class='sq3'></div></div></div>
                </>),
                styled.body`
                min-width:100%;
                min-height:100%;
                background: #F3AC3C;
    display:flex;
    justify-content:center;
    align-items:center;
    .sq1{
    width:200px;
    height:200px;
    background: #1A4341;
    display:flex;
    justify-content:start;
    align-items:end;
    }
    .sq2{
    width:100px;
    height:100px;
    background: #998235;
    display:flex;
    justify-content:end;
    align-items:end;
    }
    .sq3{
    width:50px;
    height:50px;
    background: #F3AC3C;
    }
                `)).renderHTML()
        }
    },
    {
        battle_name: 'Switches',
        battle_group_number: 4,
        battle_number: 24,
        color_pallate: ['#62306D', '#F7EC7D', '#AA445F', '#E38F66'],
        url: 'https://cssbattle.dev/play/24',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div style={{ 'display': 'flex', 'position': 'absolute', 'zIndex': '1' }}>
                        <div class='reg'></div>
                        <div class='reg' style={{ 'marginTop': '50px', 'background': '#E38F66' }}></div>
                    </div>
                    <div style={{ 'display': 'flex', 'position': 'absolute', 'zIndex': '2' }}>
                        <div class='circle'>
                        </div>
                        <div class='circle'>
                        </div>
                    </div>
                </>),
                styled.body`
                min-width:100%;
                min-height:100%;
                background: #62306D;
    display:flex;
    justify-content:center;
    align-items:center;
    .circle{
    margin-left:20px;
    width:100px;
    height:100px;
    border-radius:50%;
    background:#F7EC7D;
    margin-right:20px;
    }
    .reg{
    width:100px;
    height:150px;
    margin-left:20px;
    margin-right:20px;
    border-radius:50px 50px 50px 50px;
    background:#AA445F;
    }
                `)).renderHTML()
        }
    },
    {
        battle_name: 'Horizon',
        battle_group_number: 5,
        battle_number: 30,
        color_pallate: ['#F7EC7D', '#E38F66', '#AA445F', '#62306D'],
        url: 'https://cssbattle.dev/play/23',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='req1'></div>
                    <div class='req2'></div>
                    <div class='req3'></div>


                </>),
                styled.body`
                min-width:100%;
                min-height:100%;
                background: #62306D;
    display:flex;
    flex-direction:column;
    justify-content:start;
    margin:0px;
    .req1{
    width:400px;
    height:50px;
    background: #F7EC7D;
    }
    .req2{
    width:400px;
    height:50px;
    background: #E38F66;
    }
    .req3{
    width:400px;
    height:100px;
    background: #AA445F;
    }
                `)).renderHTML()
        }
    },
    {
        battle_name: 'Equals',
        battle_group_number: 6,
        battle_number: 31,
        color_pallate: ['#AA445F', '#F7EC7D', '#E38F66'],
        url: 'https://cssbattle.dev/play/31',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='circle1'></div>
                    <div class='circle2'></div>
                    <div class='reg'></div>
                    <div class='reg2'></div>
                </>),
                styled.body`
                min-width:100%;
                min-height:100%;
                background: #AA445F;
    display:flex;
    justify-content:center;
    align-items:center;
    .reg{
    width:50px;
    height:300px;
    background: #AA445F;
    position:absolute;
    z-index:3;
    margin-left:0px;
    }
    .circle1{
    width:200px;
    height:200px;
    border-radius:100px;
    background:#F7EC7D;
    margin-left:-50px;
    position:absolute;
    z-index:2;
    }
    .circle2{
    width:200px;
    height:200px;
    border-radius:100px;
    background:#E38F66;
    margin-right:-50px;
    position:absolute;
    z-index:1;
    }
    .reg2{
    width:80px;
    height:180px;
    border-radius:0px 200px 200px 0px;
    background: #E38F66;
    position:absolute;
    z-index:3;
    margin-left:130px;
    }
                `)).renderHTML()
        }
    },
    {
        battle_name: 'Band-aid',
        battle_group_number: 6,
        battle_number: 32,
        color_pallate: ['#FFFFFF', '#F3AC3C', '#A3A368', '#FBE18C'],
        url: 'https://cssbattle.dev/play/32',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='sq'></div>
                    <div class='req1'></div>
                    <div class='req2'></div>
                    <div class='req3'></div>
                    <div class='req4'></div>

                </>),
                styled.body`
                min-width:100%;
                min-height:100%;
                background: #FFFFFF;
    display:flex;
    justify-content:center;
    align-items:center;
    .sq{
    width:50px;
    height:50px;
    background:#FBE18C;
    transform: rotate(45deg);
    position:absolute;
    z-index:1
    }
    .req1{
    width:80px;
    height:50px;
    background:#F3AC3C;
    position:absolute;
    transform: rotate(45deg);
    margin-left:-85px;
    margin-top:-85px;
    }
    .req2{
    width:80px;
    height:50px;
    background:#F3AC3C;
    position:absolute;
    transform: rotate(45deg);
    margin-right:-85px;
    margin-bottom:-85px;
    }
    .req3{
    width:80px;
    height:50px;
    background:#A3A368;
    position:absolute;
    transform: rotate(135deg);
    margin-right:85px;
    margin-top:85px;
    }
    .req4{
    width:80px;
    height:50px;
    background:#A3A368;
    position:absolute;
    transform: rotate(135deg);
    margin-right:-85px;
    margin-top:-85px;
    }
                `)).renderHTML()
        }
    },
    {
        battle_name: 'Hippo',
        battle_group_number: 13,
        battle_number: 75,
        color_pallate: ['#191919', '#A64942', '#FE5F55', '#000000'],
        url: 'https://cssbattle.dev/play/75',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='face'></div>
                    <div class='mouth'></div>
                    <div class='container-eye'>
                        <div class='eye'></div>
                        <div class='eye'></div>
                    </div>
                    <div class='container-nose'>
                        <div class='nose-left'></div>
                        <div class='nose-right'></div>
                    </div>
                    <div class='container-ear'>
                        <div class='ear-left'></div>
                        <div class='ear-right'></div>
                    </div>

                </>),
                styled.body`
                min-width:100%;
                min-height:100%;
                background: #191919;
    display:flex;
    justify-content:center;
    align-items:center;
    .face{
    width:130px;
    height:150px;
    background: #FE5F55;
    border-radius:60px;
    position:absolute;
    z-index:1
    }
    .mouth{
    width:150px;
    height:100px;
    margin-top:90px;
    background: #A64942;
    border-radius:110px 110px 90px 90px;
    position:absolute;
    z-index:2
    }
    .container-eye{
    width:80px;
    height:10px;
    position:absolute;
    z-index:3;
    margin-top:-40px;
    display:flex;
    justify-content:space-between;
    }
    .eye{
    width:10px;
    height:10px;
    border-radius:50%;
    background: #191919;
    }
    .container-nose{
    width:100px;
    height:25px;
    position:absolute;
    z-index:3;
    margin-top:58px;
    display:flex;
    justify-content:space-between;
    }
    .nose-left{
    width:20px;
    height:30px;
    transform:rotate(45deg);
    border-radius:50%;
    background: #000000;
    }
    .nose-right{
    width:20px;
    height:30px;
    transform:rotate(135deg);
    border-radius:50%;
    background: #000000;
    }
    .container-ear{
    width:90px;
    height:50px;
    position:absolute;
    z-index:0;
    margin-top:-115px;
    display:flex;
    justify-content:space-between;
    }
    .ear-left{
    width:10px;
    transform:rotate(135deg);
    border-radius:50%;
    border:5px solid #FE5F55;
    background: #000000;
    }
    .ear-right{
    width:10px;
    transform:rotate(45deg);
    border-radius:50%;
    border:5px solid #FE5F55;
    background: #000000;
    }
                `)).renderHTML()
        }
    },
    {
        battle_name: 'Piano',
        battle_group_number: 14,
        battle_number: 80,
        color_pallate: ['#998235', '#191919', '#FFFFFF'],
        url: 'https://cssbattle.dev/play/80',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='req1'>
                        <div class='container'>
                            <div class='req-black' style={{ 'marginLeft': '-125px' }}>
                            </div>
                            <div class='req-black' style={{ 'marginLeft': '-75px' }}>
                            </div>
                            <div class='req-black' style={{ 'marginLeft': '25px' }}>
                            </div>
                            <div class='req-black' style={{ 'marginLeft': '75px' }}>
                            </div>
                            <div class='req-black' style={{ 'marginLeft': '125px' }}>
                            </div>
                            <div class='container1'>
                                <div class='req-white'></div>
                                <div class='req-white'></div>
                                <div class='req-white'></div>
                            </div>
                            <div class='container2'>
                                <div class='req-white'></div>
                                <div class='req-white'></div>
                                <div class='req-white'></div>
                                <div class='req-white'></div>
                            </div>
                        </div>
                    </div>
                </>),
                styled.body`
                    min-width:100%;
                    min-height:100%;
                    background: #998235;
    display:flex;
    justify-content:center;
    align-items:center;
    .req1{
    width:180px;
    height:100px;
    background: #191919;
    border-radius:10px;
    display:flex;
    justify-content:center;
    align-items:end;
    }
    .container{
    height:70px;
    width:170px;
    padding:0px;
    margin:5px;
    display:flex;
    justify-content:center;
    align-items:end;
    }
    .container1{
    height:70px;
    width:70px;
    display:flex;
    justify-content:center;
    position:relative;
    align-items:end;
    }
    .container2{
    height:70px;
    width:95px;
    margin-left:5px;
    display:flex;
    justify-content:center;
    align-items:end;
    }
    .req-white{
    width:50px;
    height:70px;
    margin-right:5px;
    border-radius:5px;
    background: #FFFFFF;
    }
    .req-white:last-child{
    margin-right:0px;
    }
    .req-black{
    width:15px;
    height:40px;
    background: #191919;
    position:absolute;
    margin-bottom:35px;
    z-index:5
    }
                    `)).renderHTML()
        }
    },
    {
        battle_name: 'Odoo',
        battle_group_number: 15,
        battle_number: 81,
        color_pallate: ['#191919', '#714B67', '#8F8F8F'],
        url: 'https://cssbattle.dev/play/81',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='circle1' >
                        <div class='circle2'></div>
                    </div>
                    <div class='circle1' style={{ 'background': '#8F8F8F' }}>
                        <div class='circle2'></div>
                        <div class='reg'></div>
                    </div>
                    <div class='circle1' style={{ 'background': '#8F8F8F' }}>
                        <div class='circle2'></div>
                    </div>
                    <div class='circle1' style={{ 'background': '#8F8F8F' }}>
                        <div class='circle2'></div>
                    </div>
                </>),
                styled.body`
                    min-width:100%;
                    min-height:100%;
                    background: #191919;
    display:flex;
    justify-content:center;
    align-items:center;
    .circle1{
    margin-top:23px;
    margin-right:3px;
    width:80px;
    height:80px;
    background:#714B67;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    }
    .circle2{
    width:42px;
    height:42px;
    background:#191919;
    border-radius:50%;
    }
    .reg{
    width:20px;
    height:60px;
    border-radius:10px;
    background:#8F8F8F;
    position:absolute;
    margin-top:-51px;
    margin-right:-61px;
    }
                    `)).renderHTML()
        }
    },
    {
        battle_name: 'Diamond Cut',
        battle_group_number: 15,
        battle_number: 82,
        color_pallate: ['#F3AC3C', '#998235', '#1A4341'],
        url: 'https://cssbattle.dev/play/82',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='sq1'>
                        <div class='sq2'>
                            <div class='sq3'></div>
                            <div class='sq4' style={{ 'marginTop': '-129px' }}></div>
                            <div class='sq4' style={{ 'margin-left': '-129px' }}></div>
                        </div>
                    </div>
                </>),
                styled.body`
                    min-width:100%;
                    min-height:100%;
                    background: #F3AC3C;
    display:flex;
    justify-content:center;
    align-items:center;
    .sq1{
    width:158px;
    height:158px;
    background:#998235;
    transform:rotate(45deg);
    display:flex;
    justify-content:center;
    align-items:center;
    }
    .sq2{
    width:100px;
    height:100px;
    background:#F3AC3C;
    display:flex;
    justify-content:center;
    align-items:center;
    }
    .sq3{
    width:30px;
    height:30px;
    background:#1A4341;
    }
    .sq4{
    width:30px;
    height:30px;
    background:#F3AC3C;
    position:absolute;
    
    }
                    `)).renderHTML()
        }
    },
    {
        battle_name: 'Junction',
        battle_group_number: 15,
        battle_number: 84,
        color_pallate: ['#191919', '#A64942', '#FE5F55'],
        url: 'https://cssbattle.dev/play/84',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='reg1'></div>
                    <div class='reg2'></div>
                    <div class='reg3'></div>
                    <div class='reg4'></div>
                </>),
                styled.body`
                    min-width:100%;
                    min-height:100%;
                    background: #191919;
    display:flex;
    align-items:center;
    overflow:hidden;
    .reg1{
    width:180px;
    height:40px;
    border-radius:0px 20px 20px 0;
    margin-right:40px;
    background:#A64942;
    }
    .reg2{
    width:180px;
    height:40px;
    border-radius:20px 0px 0px 20px;
    background:#A64942;
    }
    .reg3{
    width:40px;
    height:130px;
    border-radius:0px 0px 20px 20px;
    background:#FE5F55;
    position:absolute;
    margin-top:-170px;
    margin-left:180px;
    }
    .reg4{
    width:40px;
    height:130px;
    border-radius:20px 20px 0px 0px;
    background:#FE5F55;
    position:absolute;
    margin-bottom:-170px;
    margin-left:180px;
    }
                    `)).renderHTML()
        }
    },
    {
        battle_name: 'Pythagoras',
        battle_group_number: 15,
        battle_number: 85,
        color_pallate: ['#D25B70', '#F7F3DA', '#F6DF96', '#6CB3A9'],
        url: 'https://cssbattle.dev/play/84',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='box1'></div>
                    <div class='box2'>
                    </div>
                    <div class='box3'>
                    </div>
                </>),
                styled.body`
                    min-width:100%;
                    min-height:100%;
                    background: #D25B70;
    display:flex;
    justify-content:center;
    align-items:center;
    .box1{
    width:60px;
    height:60px;
    margin-left:-110px;
    margin-top:-85px;
    transform:rotate(37deg);
    background: #6CB3A9;
    position:absolute;
    }
    .box2{
    width:80px;
    height:80px;
    margin-left:85px;
    margin-top:-112px;
    transform:rotate(37deg);
    background: #F6DF96;
    position:absolute;
    }
    .box3{
    width:100px;
    height:100px;
    background: #F7F3DA;
    position:absolute;
    margin-top:98px;
    }
                    `)).renderHTML()
        }
    },
    {
        battle_name: 'Stairway',
        battle_group_number: 15,
        battle_number: 86,
        color_pallate: ['#191919', '#4F77FF'],
        url: 'https://cssbattle.dev/play/86',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='window'>
                        <div class='stair' style={{ 'width': '20px' }}></div>
                        <div class='stair' style={{ 'width': '40px' }}></div>
                        <div class='stair' style={{ 'width': '60px' }}></div>
                        <div class='stair'></div>

                    </div>
                </>),
                styled.body`
                    min-width:100%;
                    min-height:100%;
                    background: #191919;
    display:flex;
    justify-content:center;
    align-items:center;
    .window{
    width:100px;
    height:150px;
    background:#4F77FF;
    border-radius:50px 50px 0 0;
    display:flex;
    flex-direction:column;
    align-items:end;
    justify-content:end;
    
    }
    .stair{
    width:80px;
    height:20px;
    margin-top:4px;
    background:#191919;
    }
                    `)).renderHTML()
        }
    },
    {
        battle_name: 'Eclipse',
        battle_group_number: 16,
        battle_number: 90,
        color_pallate: ['#998235', '#F3AC3C', '#1A4341'],
        url: 'https://cssbattle.dev/play/90',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='circle1'></div>
                    <div class='circle2' style={{ 'marginTop': '-400px', 'zIndex': '0' }}></div>
                    <div class='circle2'></div>
                </>),
                styled.body`
                    min-width:100%;
                    min-height:100%;
                    background: #F3AC3C;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    position:relative;
    .circle1{
    width:200px;
    height:200px;
    border-radius:50%;
    background:#1A4341;
    border:25px solid #F3AC3C;
    position:absolute;
    z-index:1;
    }
    .circle2{
    width:400px;
    height:400px;
    border-radius:50%;
    background:#998235;
    position:absolute;
    margin-top:400px;
    }
                    `)).renderHTML()
        }
    },
    {
        battle_name: 'CSSBattle',
        battle_group_number: 17,
        battle_number: 100,
        color_pallate: ['#14313E', '#FFDF00'],
        url: 'https://cssbattle.dev/play/100',
        render: () => {
            return (new CSSBattle(
                (<>
                    <div class='box0'></div>
                    <div class='box1'></div>
                    <div class='box2'></div>
                    <div class='box3'></div>
                    <div class='container' style={{ 'transform': 'rotate(-135deg)', 'zIndex': '4' }}>
                        <div class='blade1'></div>
                        <div class='top-blade1'></div>
                        <div class='mid-blade1'></div>
                        <div class='bot-blade1'></div>
                        <div class='box-center'></div>
                    </div>
                    <div class='container'>
                        <div class='blade1'></div>
                        <div class='top-blade1'></div>
                        <div class='mid-blade1'></div>
                        <div class='bot-blade1'></div>

                    </div>
                </>),
                styled.body`
                    min-width:100%;
                    min-height:100%;
                    background: #14313E;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0px;
    .box0{
    width:295px;
    height:40px;
    border-radius:5px;
    background:#FFDF00;
    position:absolute;
    z-index:0
    }
    .box1{
    width:275px;
    height:150px;
    border-radius:20px;
    background:#FFDF00;
    position:absolute;
    z-index:1
    }
    .box2{
    width:225px;
    height:100px;
    border-radius:15px;
    background:#14313E;
    position:absolute;
    z-index:2
    }
    .box3{
    width:195px;
    height:150px;
    background:#14313E;
    position:absolute;
    z-index:3
    }
    .container{
    width:145px;
    height:180px;
    position:absolute;
    margin-top:-5px;
    z-index:4;
    display:flex;
    justify-content:center;
    align-items:end;
    transform:rotate(135deg);  
    }
    .blade1{
    margin:0px;
    width:30px;
    height:155px;
    background:#FFDF00;
    overflow:hidden;
    position:relative;
    }
    .top-blade1{
    width:22px;
    height:22px;
    background:#FFDF00;
    position:absolute;
    z-index:1;
    bottom:-10px;
    transform:rotate(135deg);
    }
    .mid-blade1{
    width:80px;
    height:20px;
    background:#FFDF00;
    position:absolute;
    z-index:2;
    top:25px;
    }
    .bot-blade1{
    width:20px;
    height:50px;
    background:#FFDF00;
    position:absolute;
    z-index:2;
    top:-15px;
    border-radius:8px;
    }
    .box-center{
    width:50px;
    height:50px;
    background:#14313E;
    position:absolute;
    z-index:0;
    top:65px;
    }
                    `)).renderHTML()
        }
    },

]
