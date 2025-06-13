'use client';
import { Space, Table, TableProps } from 'antd';
import React from 'react';
import { UserDtoResponse } from '../dto/user.dto';

interface Props {
	data: UserDtoResponse[];
}

const TableUser: React.FC<Props> = ({ data }) => {
	const columns: TableProps<UserDtoResponse>['columns'] = [
		{
			title: 'Nama',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Umur',
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: 'Alamat',
			dataIndex: 'location',
			key: 'location',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: 'No. Telepon 1',
			dataIndex: 'phone',
			key: 'phone',
		},
		{
			title: 'No. Telepon 2',
			dataIndex: 'cell',
			key: 'cell',
		},
		{
			title: 'Gambar',
			dataIndex: 'picture',
			key: 'picture',
			render: (_, record) => (
				<Space>
					<img
						src={record.picture[0]}
						alt=''
						width={50}
					/>
				</Space>
			),
		},
	];

	return (
		<div>
			<Table<UserDtoResponse>
				dataSource={data}
				columns={columns}
				pagination={{ pageSize: 5 }}
				bordered
				rowKey='id'
				scroll={{ x: 'max-content' }}
			/>
		</div>
	);
};

export default TableUser;
