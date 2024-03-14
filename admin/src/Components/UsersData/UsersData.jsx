import React, { useState, useEffect } from 'react'
import './Users.css'

const UsersData = () => {
    const [allusers, setallusers] = useState([]);
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:4000/users');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            setallusers(data.users);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="useritem">
            {allusers.map((user, index) => {
                return <React.Fragment key={index}>
                    <div key={index} className='user-container'>
                    <div className="user-detail">
                        <div className="name-container">
                            <h4>Username:</h4>
                            <h2>{user.name}</h2>
                        </div>
                        <div className="email-container">
                            <h4>Email:</h4>
                            <h2>{user.email}</h2>
                        </div>
                        <hr />
                    </div>
                        
                    </div></React.Fragment>
            })
            }

        </div>
    );
}
export default UsersData