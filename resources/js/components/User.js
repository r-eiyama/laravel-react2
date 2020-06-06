import React from 'react';

function User() {
    const users = [
        {
            id: 1,
            name: 'John',
            email: 'john@example.com'
        },
        {
            id: 2,
            name: 'Kevin',
            email: 'kevin@test.com'
        },
        {
            id: 3,
            name: 'Joshua',
            email: 'joshua@example.com'
        }
    ]


    return (
        <div>
            <h1>Userページ</h1>
            <ul>
                {users.map((user) => <li key={user.id} >
                    {user.name}
                </li> )}
            </ul>
        </div>
        );
}

export default User;
