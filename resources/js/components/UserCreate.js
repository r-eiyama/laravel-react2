import React, {useState} from 'react';

function UserCreate() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            default:
                console.log('key not found');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`/api/users`, {
            'name': name,
            'email': email,
            'password': password,
        });
        console.log(name);
        console.log(email);
        console.log(password);

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
            <div>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={handleChange}/>
                    <br/>
                </label>
            </div>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default UserCreate;
