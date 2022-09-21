import { Context } from "context/Context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import User from "./User";
import UserForm from "./UserForm";

export default function Sidebar(props) {
    const { URLS, currentUser, setCurrentUser} = useContext(Context);
    const FETCH_USER_URL = URLS.FETCH_USER_URL;
    
    const initUserForm = {username: ''};
    const [userForm, setUserForm] = useState(initUserForm);

    function handleChange(e) {
        setUserForm({...userForm, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();

        getCurrentUser(userForm.username);
        setUserForm(initUserForm);
    }
    
    async function getCurrentUser(username) {
        const URL = `${FETCH_USER_URL}${username}`;
        
        try {
            const response = await fetch(URL);
            const userData = await response.json();
            
            setCurrentUser(userData);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="sidebar">
                <Link to='/'>
                    <h1 className="app-name">Sleeper Sheets</h1>
                </Link>
                <UserForm
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    userForm={userForm}
                />
                {currentUser ? <User currentUser={currentUser}/> : ''}
            </div>
        </>
    );
}