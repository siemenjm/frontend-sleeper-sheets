import Avatar from "./Avatar";
import UserLeagues from "./UserLeagues";

export default function User({ currentUser }) {
    // function loading() {
    //     return (
    //         <>
    //             <p>Loading user data...</p>
    //         </>
    //     );
    // }

    function loaded() {
        return (
            <>
                <div className="user-info">
                    <h2>Current User</h2>
                    <div>
                        <Avatar avatar={currentUser.avatar} type='user' />
                        <p className="username">{currentUser.username}</p>
                    </div>
                </div>
                <div className="league-info">
                    <h2>Current Leagues</h2>
                    <UserLeagues />
                </div>
            </>
        );
    }
    
    return ( 
        <>
            {/* {currentUser ? loaded() : loading()} */}
            {loaded()}
        </>
    );
}