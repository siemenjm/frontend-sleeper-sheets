import { Context } from "context/Context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import User from "./User";
import UserForm from "./UserForm";

export default function Sidebar(props) {
    const { BASE_URL, currentUser, logoutUser } = useContext(Context);

    // const USER_URL = `${BASE_URL}user/`;
    
    // const initUserForm = {username: ''};
    // const [userForm, setUserForm] = useState(initUserForm);

    // function handleChange(e) {
    //     setUserForm({...userForm, [e.target.name]: e.target.value});
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     getUser(userForm.username);
    //     setUserForm(initUserForm);
    // }

    // async function getUser(username) {
    //     const URL = `${USER_URL}${username}`;

    //     try {
    //         const response = await fetch(URL);
    //         const userData = await response.json();
            
    //         setUser(userData);
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }

    function handleClick(e) {
        window.location.href='/';
    }

    return (
        <>
            <div className="sidebar">
                <Link to='/' onClick={handleClick}>
                    <h1 className="app-name">Sleeper Sheets</h1>
                </Link>
                {/* <UserForm
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    userForm={userForm}
                /> */}
                {currentUser ? <User currentUser={currentUser} handleLogout={logoutUser}/> : ''}
            </div>
        </>
    );
}