import { Context } from "context/Context";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import EditSleeperForm from "./EditSleeperForm";
import UserLeagues from "./UserLeagues";

export default function User(props) {
    const { currentUser, setCurrentUser, sleeperUser, setSleeperUser, logoutUser } = useContext(Context);
    const [editSleeperForm, setEditSleeperForm] = useState(null);

    console.log(currentUser);
    console.log(sleeperUser);

    function showEditSleeperForm() {
        setEditSleeperForm({ ...editSleeperForm, sleeperName: sleeperUser.username });
    }
    
    async function getSleeperUser(user) {
        console.log('in sleeper user');
        console.log(user.sleeperName);
        const URL = `https://api.sleeper.app/v1/user/${user.sleeperName}`;
        console.log(URL);
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
        // add button to change your sleeper app username here
    }

    return (
        <>
            <div className="user-info">
                <h2>Current User</h2>
                <div>
                    <Avatar avatar={sleeperUser.avatar} type='user' />
                    <div>
                        <p className="username">{sleeperUser.username}</p>
                        <p onClick={showEditSleeperForm}>Change Username</p>
                    </div>
                </div>
            </div>
            {editSleeperForm ? <EditSleeperForm editSleeperForm={editSleeperForm} setEditSleeperForm={setEditSleeperForm} getSleeperUser={getSleeperUser} setCurrentUser={setCurrentUser}/> : ''}
            <div className="league-info">
                <h2>Current Leagues</h2>
                <UserLeagues />
            </div>
            <Link onClick={logoutUser} to='/' className="logout-link">Logout {sleeperUser.username}</Link>
        </>
    );
}