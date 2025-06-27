import { type FC } from 'react';
import { Table } from 'antd';

const CustomTable: FC<{ columns: any[], data: any[], loading: boolean }> = ({ columns, data, loading }) => {
    return (
        <>
            <Table<any> columns={columns} dataSource={data} loading={loading} />
        </>
    );
};

export default CustomTable;