import { useState } from "react";

export default function Sidebar(props) {
    const BASE_URL = 'https://api.sleeper.app/v1/user/';
    
    const initForm = {username: ''};
    const [form, setForm] = useState(initForm);
    const [user, setUser] = useState(null);

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();

        getUser(form.username);
        setForm(initForm);
    }

    async function getUser(username) {
        const URL = `${BASE_URL}${username}`;
        try {
            const response = await fetch(URL);
            const userData = await response.json();
            console.log(userData);
            
            setUser(userData);
        } catch(err) {
            console.log(err);
        }
    }

    function loading() {
        return (
            <>
                <p>Loading user data...</p>
            </>
        );
    }

    function loaded() {
        return (
            <div className="user-info">
                <h3>Current User</h3>
                <p className="user-avatar">{user.avatar}</p>
                <p className="username">{user.username}</p>
            </div>
        );
    }

    return (
        <>
            <div className="sidebar">
                <h2>Sidebar Comp</h2>
                <div className="app-info"></div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Enter Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={form.username}
                        onChange={handleChange}
                    />
                    <button type="submit">Get User Info</button>
                </form>
                {user ? loaded() : loading()}
            </div>
        </>
    );
}