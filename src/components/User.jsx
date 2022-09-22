import { Context } from "context/Context";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import UserLeagues from "./UserLeagues";

export default function User(props) {
    const { currentUser, sleeperUser, setSleeperUser, logoutUser } = useContext(Context);
    console.log(currentUser);
    console.log(sleeperUser);
    
    async function getSleeperUser() {
        console.log(currentUser.sleeperName);
        const URL = `https://api.sleeper.app/v1/user/${currentUser.sleeperName}`;
        try {
            const response = await fetch(URL);
            const sleeperUserData = await response.json();
            console.log(sleeperUserData);

            setSleeperUser(sleeperUserData);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getSleeperUser();
    }, []);

    if (!sleeperUser) {
        return <h2>No user with that Sleeper App username...</h2>
        // add button to change your sleeper app username here
    }

    console.log(sleeperUser);

    return (
        <>
            <div className="user-info">
                <h2>Current User</h2>
                <div>
                    <Avatar avatar={sleeperUser.avatar} type='user' />
                    <p className="username">{sleeperUser.username}</p>
                </div>
            </div>
            <div className="league-info">
                <h2>Current Leagues</h2>
                <UserLeagues />
            </div>
            <Link onClick={logoutUser} to='/'>Logout {sleeperUser.username}</Link>
        </>
    );
}