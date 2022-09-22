import LoginForm from "components/LoginForm";
import RegisterForm from "components/RegisterForm";
import { Context } from "context/Context";
import { useContext } from "react";

export default function DefaultPage(props) {
    const { loginUser, registerUser } = useContext(Context);

    return (
        <div className="default-page">
            <div className="app-info">
                <img src="https://sleepercdn.com/images/v2/logos/logo_with_text.png" alt="sleeper-log" />
                <h2>Create an account and enter your Sleeper App username to see all your team, league, and matchup stats!</h2>
                <p>Note: If the Sleeper App username that you input is not in use, this app will not work...</p>
            </div>
            <LoginForm signal={loginUser}/>
            <div className="registration-info">
                <p>Don't yet have an account? Fill out the form below to get registered!</p>
            </div>
            <RegisterForm signal={registerUser}/>
        </div>
    );
}