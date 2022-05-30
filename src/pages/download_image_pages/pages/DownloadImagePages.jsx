import React,{useState,useRef, useEffect} from 'react'

import { Drawer, Button, Form, Input,InputNumber } from 'antd';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import styled from 'styled-components';
import { setWith } from 'lodash';

import { SketchPicker } from "react-color";
import { useForm } from 'antd/lib/form/Form';

const ComponentToPrint = React.forwardRef((props, ref) => (
    <Image ref={ref} width={`${props.dimension.width/props.calibrate}`} height={`${props.dimension.height/props.calibrate}`} bgColor={`${props.bgColor}`}>
        {props.dimension.width} x { props.dimension.height}
    </Image>
  ));

const DownloadImagePages = () => {
  const [form] = useForm()
    const componentRef = useRef();
    const [dimension,setDimension] = useState({
        width:100,
        height:100
    })
    const [calibrate,setCalibrate] = useState(1)
    const [colorImage,setColorImage] = useState('#969696')
    const [name,setName] = useState('Image Mockup')
    const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  
  const onClose = () => {
    setVisible(false);
  };
  const onFinish = (values) => {
    // console.log('Success:', values);
    setDimension({
      width:values.width,
      height:values.height,
    })
    setVisible(false)
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
    useEffect(()=>{
        if(window.devicePixelRatio!==1){
            // setDimension(prev=>({...prev,height:prev.height/window.devicePixelRatio,width:prev.width/window.devicePixelRatio}))
            setCalibrate(window.devicePixelRatio)
        }
    },[])
    
  return (
    <Wrapper>
      <Title>Mockup Image Generator</Title>
      <Container>
        <PreviewBox>
          <ComponentToPrint ref={componentRef} dimension={dimension} calibrate={calibrate} name={name} bgColor={colorImage}/>
          <p className='preview'>Preview Image</p>
          <div style={{'position':'absolute','right':20,'top':20,display:'flex', gap:'1rem' }}>

          
          <Button type="primary" onClick={() => exportComponentAsJPEG(componentRef,{fileName:'image'})} >
          Export As JPEG
      </Button>
          <Button type="primary" onClick={() => exportComponentAsPNG(componentRef,{fileName:'image'})} >
          Export As PNG
      </Button>
      <Button type="primary" onClick={showDrawer} >
        Setup Image
      </Button>
          </div>
        </PreviewBox>
      
     
      </Container>
     
      <Drawer title="Setup Your Image" placement="right" onClose={onClose} visible={visible}>
         <Form
          layout='vertical'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
      <Form.Item
        label="width"
        name="width"
        rules={[
          {
            required: true,
            message: 'Please input width',
          },{
            validator: async(_,val)=>{
              if(val>1400){
                return Promise.reject(new Error('Width must be less than 1400px'))
              }
            }
          }
        ]}
      >
        <InputNumber/>
      </Form.Item>

      <Form.Item
        label="height"
        name="height"
        rules={[
          {
            required: true,
            message: 'Please input height',
          },{
            validator: async(_,val)=>{
              if(val>650){
                return Promise.reject(new Error('Height must be less than 650px'))
              }
            }
          }
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="color"
        name="color"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input color',
        //   },
        // ]}
      >
        <SketchPicker color={colorImage}
          onChange={(color) => {
            // form.setFieldsValue('color',color.hex)
            setColorImage(color.hex)
          }}
          triangle='hide'
          />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </Drawer>
    </Wrapper>
  )
}

export default DownloadImagePages

const Wrapper = styled.div`
  width:100vw;
  /* min-height:100%; */
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100vh;
  background:#ddeee0;
  
`

const Container = styled.div`
  height:100%;
  width:100%;
  padding:5rem;
  display:flex;
  justify-content:space-between;
`

const Title = styled.div`
  font-size:2rem;
  font-weight:600;
  padding-top:1.5rem;
`

const PreviewBox = styled.div`
  width:100%;
  height:100%;
  border:1px #000 solid;
  display:flex;
  justify-content:center;
  align-items:center;
  position: relative;
  .preview{
    font-size:1.5rem;
    font-weight:600;
    position:absolute;
    bottom:0;
  }
`

const Image = styled.div`
  background:${props => props.bgColor || "palevioletred"};
  width:${props =>`${props.width}px`};
  height:${props =>`${props.height}px`};
  font-size:${props=>`${props.width/100}em`};
  display:flex;
  justify-content:center;
  align-items:center;
  color:#fff;
`