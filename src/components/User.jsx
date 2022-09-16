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
            <div className="user-info">
                <h3>Current User</h3>
                <p className="user-avatar">{user.avatar}</p>
                <p className="username">{user.username}</p>
            </div>
        );
    }
    
    return ( 
        <>
            {user ? loaded() : loading()}
        </>
    );
}