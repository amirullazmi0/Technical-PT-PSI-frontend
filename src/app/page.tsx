'use client';
import { Button, Flex, Input, Typography } from 'antd';
import TableUser from './components/TableUser';
import { UserDtoResponse } from './dto/user.dto';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiResponse } from './dto/global.dto';

export default function Home() {
	const [user, setUser] = useState<UserDtoResponse[]>([]);
	const [userKeyword, setUserKeyword] = useState<UserDtoResponse[]>([]);
	const [keyword, setKeyword] = useState<string>('');
	const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
	const result = 20;
	const page = 1;

	const fetchData = async () => {
		const response = await axios.get(`${API_URL}/api/user/random-user?results=${result}&page=${page}`);
		const data: ApiResponse<UserDtoResponse[]> = response.data;
		setUser(data.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleSearch = () => {
		const filteredData = user.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
		setUserKeyword(filteredData);
	};

	return (
		<Flex
			style={{
				flexDirection: 'column',
				padding: 30,
				gap: '1rem',
			}}>
			<Typography.Title level={4}>List</Typography.Title>

			<Flex justify='space-between'>
				<Input.Search
					onChange={e => setKeyword(e.target.value)}
					placeholder='Search'
					size='large'
					onSearch={handleSearch}
					variant='outlined'
					style={{ width: 500 }}
				/>
				<Button size='large'>+ New Data</Button>
			</Flex>
			<TableUser data={keyword ? userKeyword : user} />
		</Flex>
	);
}
