import { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginForm({ signal }) {
    const navigate = useNavigate();

    const initFormState = {
        email: '',
        password: '',
    };
    const [userInput, setUserInput] = useState(initFormState);

    function handleChange(e) {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const authResponse = await signal(userInput);

            setUserInput(initFormState);
        } catch(err) {
            navigate('/', { replace: true })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <label htmlFor="login-email">Enter Email</label>
            <input
                type="email"
                required
                name="email"
                id="login-email"
                placeholder="Enter email..."
                value={userInput.email}
                onChange={handleChange}
            />
            <label htmlFor="login-password">Enter Password</label>
            <input
                type="password"
                required
                name="password"
                id="login-password"
                placeholder="********"
                value={userInput.password}
                onChange={handleChange}
            />
            <button type="submit">Log In</button>
        </form>
    );
}