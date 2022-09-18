import { Context } from "context/Context";
import { useContext, useState } from "react";
import User from "./User";
import UserForm from "./UserForm";

export default function Sidebar(props) {
    const { BASE_URL, user, setUser} = useContext(Context);

    const USER_URL = `${BASE_URL}user/`;
    
    const initUserForm = {username: ''};
    const [userForm, setUserForm] = useState(initUserForm);

    function handleChange(e) {
        setUserForm({...userForm, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();

        getUser(userForm.username);
        setUserForm(initUserForm);
    }

    async function getUser(username) {
        const URL = `${USER_URL}${username}`;

        try {
            const response = await fetch(URL);
            const userData = await response.json();
            
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