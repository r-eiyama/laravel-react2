import React, {useState} from 'react';
import axios from 'axios';

function UserEdit(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            default:
                console.log('key not found');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`/api/users/${props.match.params.id}`,

            {
                'name': name,
                'email': email,
            },
            {
                headers: {
                    'X-HTTP-Method-Override': 'PUT',
                }
            },
        );
        console.log(name);
        console.log(email);

    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={handleChange}/>
                    <br/>
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="text" name="email" value={email} onChange={handleChange}/>
                    <br/>
                </label>
            </div>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default UserEdit;
