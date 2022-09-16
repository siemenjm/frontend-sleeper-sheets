import UserLeagues from "./UserLeagues";

export default function User({user}) {    
    function loading() {
        return (
            <>
                <p>Loading user data...</p>
            </>
        );
    }

    function loaded() {
        return (
            <>
                <div className="user-info">
                    <h3>Current User</h3>
                    <p className="user-avatar">Avatar: {user.avatar}</p>
                    <p className="username">Username: {user.username}</p>
                </div>
                <div className="league-info">
                    <h3>Current Leagues</h3>
                    <UserLeagues userId={user.user_id}/>
                </div>
            </>
        );
    }
    
    return ( 
        <>
            {user ? loaded() : loading()}
        </>
    );
}