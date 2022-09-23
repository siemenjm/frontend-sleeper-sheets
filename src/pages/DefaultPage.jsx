import LoginForm from "components/LoginForm";
import RegisterForm from "components/RegisterForm";
import { Context } from "context/Context";
import { useContext, useState } from "react";

export default function DefaultPage(props) {
    const { loginUser, registerUser } = useContext(Context);
    const [registerView, setRegisterView] = useState(null);
    
    function toggleRegistrationForm() {
        if (registerView) {
            setRegisterView(null);
        } else {
            setRegisterView(true);
        }
    }

    return (
        <div className="default-page">
            <div className="app-info">
                <img src="https://sleepercdn.com/images/v2/logos/logo_with_text.png" alt="sleeper-log" />
                <h2>Sign to see all your Sleeper App team, league, and matchup stats!</h2>
                <p>Note: If the Sleeper App username that you input is not in use, this app will not work...</p>
            </div>
            {registerView ? '' :
                <div>
                    <LoginForm signal={loginUser}/>
                    <div className="registration-info">
                        <h2>Don't yet have an account? <span onClick={toggleRegistrationForm}>Click here</span> to get registered!</h2>
                    </div>
                </div>
            }
            {registerView ? 
                <div>
                    <RegisterForm signal={registerUser}/>
                    <div className="registration-info">
                        <h2>Already have an account? <span onClick={toggleRegistrationForm}>Click here</span> to log in!</h2>
                    </div>
                </div>  
            : ''}
        </div>
    );
}