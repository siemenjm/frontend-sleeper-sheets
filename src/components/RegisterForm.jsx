import { useState } from "react";
import { useNavigate } from "react-router"

export default function RegisterForm({ signal }) {
    const navigate = useNavigate();

    const initFormState = {
        email: '',
        password: '',
        sleeperName: '',
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
            console.log('Failed to log in');
            navigate('/', { replace: true })
        }
    }

    return (
        <form onSubmit={handleSubmit} className='register-form'>
            <label htmlFor="register-email">Enter Email</label>
            <input
                type="email"
                required
                name="email"
                id="register-email"
                placeholder="Enter email..."
                value={userInput.email}
                onChange={handleChange}
            />
            <label htmlFor="register-password">Enter Password</label>
            <input
                type="password"
                required
                name="password"
                id="register-password"
                placeholder="********"
                value={userInput.password}
                onChange={handleChange}
            />
            <label htmlFor="register-sleeperName">Enter Sleeper App Username</label>
            <input
                type="text"
                required
                name="sleeperName"
                id="register-sleeperName"
                placeholder="Enter Sleeper App username..."
                value={userInput.sleeperName}
                onChange={handleChange}
            />
            <button type="submit">Register</button>
        </form>
    );
}