import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import 'antd/dist/antd.css';
import { Table, Upload, Modal, Empty, Button, Spin, Space, Form, Input } from 'antd';
import { UploadOutlined, InboxOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import axios from "axios";
import { url, url_local, token } from '../../api/url'
import { FaDownload, FaTable } from 'react-icons/fa'

const { confirm } = Modal;
const { Dragger } = Upload;
const HandleTablePage = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [header, setHeader] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalData, setModalData] = useState({})
    const [form] = Form.useForm()
    const handleDelete = (id) => {
        //console.log('data', data)
        const tempData = data.filter(el => {
            return el.ID !== id
        })
        setData(tempData)
    }
    const showModal = (id) => {
        const record = data.find(el => el.ID == id)
        setModalData(record)
        setIsModalVisible(true);
    }
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const showConfirm = (id) => {
        console.log('id', id)
        confirm({
            title: 'Do you Want to delete these items?',
            icon: <ExclamationCircleOutlined />,
            content: '',
            onOk() {
                console.log('id', id)
                handleDelete(id)
            },
            onCancel() {

            },
        });
    }
    const importRequest = async (option) => {
        setLoading(true)
        const { onSuccess, onError, file, onProgress } = option
        const fmData = new FormData()
        fmData.append('file_upload', file)
        const config = {
            method: 'post',
            url: `${url}/excel/import`,
            //url: `${url_local}/excel/import`,
            heads: {
                'content-type': 'multipart/form-data'
            },
            headers: { 'Authorization': token },
            data: fmData
        }
        axios(config).then((res) => {
            const temp_header = res.data.result.header.map(el => {
                return {
                    title: el,
                    dataIndex: el,
                    key: el,
                    align: el,
                }
            })
            setData(res.data.result.data)
            setHeader([...temp_header])
            setLoading(false)
        }).catch((error) => {
            console.log('error', error)
            setLoading(false)
        })

    }
    const handleExport = () => {
        setLoading(true)
        const config = {
            method: 'post',
            url: `${url}/excel/export`,
            // url: `${url_local}/excel/export`,
            responseType: 'blob',
            headers: { 'Authorization': token },
            data: {
                data
            }
        }
        axios(config).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'data.xlsx');
            document.body.appendChild(link);
            link.click();
            setLoading(false)
        }).catch((error) => {
            console.log('error', error)
            setLoading(false)
        })
    }
    const props = {
        // beforeUpload: () => false,
        name: 'file',
        showUploadList: false,
        customRequest: importRequest
    };
    const onFinish = values => {
        console.log('Success:', values);
        let find_index = data.findIndex(el => el.ID == values.ID)
        data[find_index] = values
        console.log('data', data)
        setData([...data])
        setIsModalVisible(false);
    };
    return (
        <Wrapper>
            <div className='title'>
                <span>
                </span>
                <FaTable size={24} />
                <span> Import & Export Excel</span>
            </div>
            <div className='action-container'>
                <ButtonAction onClick={handleExport}>
                    <FaDownload />
                    <span> Download</span>
                </ButtonAction>
            </div>
            <div className='table-container'>
                <Spin spinning={loading} tip="loading...">
                    <Table dataSource={data} columns={header.length > 0 ? [...header, {
                        title: 'Action',
                        key: 'action',
                        align: 'center',
                        render: (text, record) => (
                            <Space size={10}>
                                <Button type='primary' ghost onClick={() => showModal(record.ID)}>Edit</Button>
                                <Button danger ghost onClick={() => showConfirm(record.ID)}>Delete</Button>
                                {/* <Button danger ghost onClick={() => handleDelete(record.ID)}>Delete</Button> */}
                            </Space>
                        ),
                    }] : []} scroll={{ x: '85vw' }} locale={{
                        emptyText: (
                            <Empty>
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Upload File</Button>
                                </Upload>
                                {/* <Button onClick={importFile}>Click</Button> */}
                            </Empty>
                        )
                    }} pagination={{ pageSize: 10 }} />
                </Spin>
            </div>
            {
                isModalVisible && <Modal title={`Edit Row ${modalData.ID}`} visible={isModalVisible} footer={null} maskClosable={false} onOk={handleOk}
                    onCancel={handleCancel} maskClosable={true}>
                    <Form
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 20 }}
                        layout='vertical'
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        {
                            header.map((el, index) => {
                                return <Form.Item
                                    label={`${el.title} :`}
                                    name={el.title}
                                    rules={[{ required: true, message: `Please input ${el.title}` }]}
                                    initialValue={`${modalData[el.title]}`}
                                >
                                    <Input disabled={el.title === 'ID'} />
                                </Form.Item>
                            })
                        }
                        <Form.Item>
                            <Space size={15}>
                                <Button type="primary" htmlType="submit" ghost>Submit</Button>
                                {/* <Button danger ghost onClick={() => form.resetFields}>Reset</Button> */}
                            </Space>
                        </Form.Item>
                    </Form>
                </Modal>
            }
        </Wrapper>

    )
}

export default HandleTablePage

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100%;
    min-height:100vh;
    background:#E4FBFF;
    flex-direction:column;
    padding:2rem 10rem;
    .title{
        font-size:2rem;
        font-weight:bold;
    }
    .action-container{
        margin-top:2rem;
        margin-left:auto;
        display:flex;
        justify-content:end;
    }
    .table-container{
        margin-top:2rem;
    }
`

const ButtonAction = styled.button`
    width:10rem;
    height:3rem;
    background:#7868E6;
    font-weight:bold;
    color:#fff;
    border-radius:10px;
    /* display:flex;
    justify-content:center;
    align-items:center; */
    cursor: pointer;
`