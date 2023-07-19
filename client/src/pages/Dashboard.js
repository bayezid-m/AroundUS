import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        //Quote();
		const token = localStorage.getItem('token')
        if (!token) {
				localStorage.removeItem('token')
				navigate('/welcome');
			} else {
				showProfile();
			}  
	}, [])

    async function showProfile() {
		const req = await fetch('http://localhost:2000/api/todos', {
            method: 'GET',
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})
		const data = await req.json()
		if (data.status === 'ok') {
			//setTodos(data.user)
			console.log(data.user);
		} else {
			alert(data.error)
		}
	}
    return (
        <div>
            <h1>Please login first.</h1>
        </div>
    )
}

export default Dashboard