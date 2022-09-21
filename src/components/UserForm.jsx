export default function UserForm({handleSubmit, handleChange, userForm}) {
    
    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Enter Sleeper Username</label>
            <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username..."
                value={userForm.username}
                onChange={handleChange}
                required
            />
            <button type="submit">Get User Info</button>
        </form>
    );
}