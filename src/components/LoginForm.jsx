export default function LoginForm({handleSubmit, handleChange, loginForm}) {
    
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email..."
                value={loginForm.email}
                onChange={handleChange}
                required
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                value={loginForm.password}
                onChange={handleChange}
                required
            />
            <button type="submit">Log In</button>
        </form>
    );
}