import { useState } from "react";
import User from "./User";
import UserForm from "./UserForm";

export default function Sidebar(props) {
    const BASE_URL = 'https://api.sleeper.app/v1/user/';
    
    const initUserForm = {username: ''};
    const [userForm, setUserForm] = useState(initUserForm);
    const [user, setUser] = useState(null);

    function handleChange(e) {
        setUserForm({...userForm, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();

        getUser(userForm.username);
        setUserForm(initUserForm);
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

    return (
        <>
            <div className="sidebar">
                <h2>Sidebar Comp</h2>
                <div className="app-info"></div>
                <UserForm
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    userForm={userForm}
                />
                {user ? <User user={user}/> : ''}
            </div>
        </>
    );
}