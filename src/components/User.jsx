import { Context } from "context/Context";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import DeleteMessage from "./DeleteMessage";
import EditSleeperForm from "./EditSleeperForm";
import UserLeagues from "./UserLeagues";

export default function User(props) {
    const { currentUser, setCurrentUser, sleeperUser, setSleeperUser, logoutUser } = useContext(Context);
    const [editSleeperForm, setEditSleeperForm] = useState(null);
    const [deleteMessage, setDeleteMessage] = useState(null);

    function showEditSleeperForm() {
        setEditSleeperForm({ ...editSleeperForm, sleeperName: sleeperUser.username });
    }

    function showDeleteMessage() {
        setDeleteMessage(true);
    }
    
    async function getSleeperUser(user) {
        const URL = `https://api.sleeper.app/v1/user/${user.sleeperName}`;
        try {
            const response = await fetch(URL);
            const sleeperUserData = await response.json();

            setSleeperUser(sleeperUserData);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getSleeperUser(currentUser);
    }, []);

    if (!sleeperUser) {
        return <h2>No user with that Sleeper App username...</h2>
    }

    return (
        <>
            <div className="user-info">
                <h2>Current User</h2>
                <div>
                    <Avatar avatar={sleeperUser.avatar} type='user' />
                    <div>
                        <p className="username">{sleeperUser.username}</p>
                        <div className="user-settings-container">
                            <p className="user-settings" onClick={showEditSleeperForm}>Edit</p>
                            <p className="user-settings" onClick={setDeleteMessage}>Delete</p>
                        </div>
                    </div>
                </div>
            </div>
            {editSleeperForm ? <EditSleeperForm editSleeperForm={editSleeperForm} setEditSleeperForm={setEditSleeperForm} getSleeperUser={getSleeperUser} setCurrentUser={setCurrentUser}/> : ''}
            {deleteMessage ? <DeleteMessage setDeleteMessage={setDeleteMessage} logoutUser={logoutUser}/> : ''}
            <div className="league-info">
                <h2>Current Leagues</h2>
                <UserLeagues />
            </div>
            <Link onClick={logoutUser} to='/' className="logout-link">Logout {sleeperUser.username}</Link>
        </>
    );
}