import LoginForm from "components/LoginForm";
import { Context } from "context/Context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function DefaultPage(props) {
    const { DB_URL, setUserAccount } = useContext(Context);

    const initLoginForm = {
        email: '',
        password: '',
    };
    const [loginForm, setLoginForm] = useState(initLoginForm);

    function handleChange(e) {
        setLoginForm({...loginForm, [e.target.name]: e.target.value});
    }

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     getUser(loginForm.email);
    //     setLoginForm(initLoginForm);
    // }

    async function getUserAccount(email) {
        const URL = `${DB_URL}/users/`;

        try {
            const response = await fetch(URL);
            const allUserAccounts = await response.json();
            
            setUserAccount(allUserAccounts);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="default-page">
            <div className="app-info">
                <img src="https://sleepercdn.com/images/v2/logos/logo_with_text.png" alt="sleeper-log" />
                <h2>Create an account and enter your Sleeper App username to see all your team, league, and matchup stats!</h2>
                <p>Note: If the Sleeper App username that you input is not in use, this app will not work...</p>
            </div>
            <LoginForm handleChange={handleChange} loginForm={loginForm} />
            <div className="registration-info">
                <p>Don't yet have an account? <Link to={'/register/'}>Click here</Link> to get registered!</p>
            </div>
        </div>
    );
}