import { Table, Tag, Space, Upload, message, Empty, Button } from 'antd';

export const column = (fnDelete) => {
    return [
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
                <Button danger ghost onClick={() => { fnDelete(record.id) }}>Delete</Button>
            ),
        },
    ];
}