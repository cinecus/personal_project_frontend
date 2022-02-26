import React, { useState } from 'react'
import styled from 'styled-components'
import 'antd/dist/antd.css';
import { Table, Tag, Space, Upload, message, Empty, Button } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import axios from "axios";
import { url, url_local, token } from '../../api/url'

const { Dragger } = Upload;
const HandleTablePage = () => {
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState({})
    const [data, setData] = useState([])
    const formData = new FormData()
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            align: 'center',
        },
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'position',
            align: 'center',
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (text, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    // const data = [
    //     // {
    //     //     key: '1',
    //     //     name: 'John Brown',
    //     //     age: 32,
    //     //     test: 'test',
    //     //     address: 'New York No. 1 Lake Park',
    //     //     tags: ['nice', 'developer'],
    //     // },
    //     // {
    //     //     key: '2',
    //     //     name: 'Jim Green',
    //     //     age: 42,
    //     //     test: 'test',
    //     //     address: 'London No. 1 Lake Park',
    //     //     tags: ['loser'],
    //     // },
    //     // {
    //     //     key: '3',
    //     //     name: 'Joe Black',
    //     //     age: 32,
    //     //     test: 'test',
    //     //     address: 'Sidney No. 1 Lake Park',
    //     //     tags: ['cool', 'teacher'],
    //     // },
    // ];
    const importFile = () => {
        setLoading(true)
        console.log('file', file)
        formData.append('file_upload', file)
        const config = {
            method: 'post',
            //url: `${url}/excel/import`,
            url: `${url_local}/excel/import`,
            heads: {
                'content-type': 'multipart/form-data'
            },
            headers: { 'Authorization': token },
            data: formData
        }
        axios(config).then((res) => {
            console.log('res', res)
            setData(res.data.result.data)
        }).catch((error) => {
            console.log('error', error)
        })

    }

    const props = {
        // beforeUpload: () => false,
        onChange(info) {
            if (info.file.status !== 'uploading') {
                setFile(info.fileList[0].originFileObj)
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
        <Wrapper>
            <div className='title'>
                Import & Export Excel
            </div>
            <div className='action-container'>

                <ButtonAction>Export</ButtonAction>

            </div>
            <div className='table-container'>
                <Table dataSource={data} columns={columns} scroll={{ x: '85vw' }} locale={{
                    emptyText: (
                        <>
                            <Upload {...props}>
                                <Button icon={<UploadOutlined />}>Upload Image</Button>
                            </Upload>
                            <Button onClick={importFile}>Click</Button>
                        </>
                        // <Dragger {...props}>
                        //     <p className="ant-upload-drag-icon">
                        //         <InboxOutlined />
                        //     </p>
                        //     <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        //     <p className="ant-upload-hint">
                        //         Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        //         band files
                        //     </p>
                        // </Dragger>

                    )
                }} />
            </div>
        </Wrapper>
    )
}

export default HandleTablePage

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100vh;
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
    margin-left:1.5rem;
    border-radius:10px;
`