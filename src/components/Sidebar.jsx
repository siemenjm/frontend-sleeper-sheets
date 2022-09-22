import { Context } from "context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import User from "./User";

export default function Sidebar(props) {
    const { currentUser, logoutUser } = useContext(Context);

    function handleClick(e) {
        logoutUser();
    }

    if (!currentUser) {
        return;
    }

    return (
        <>
            <div className="sidebar">
                <Link to='/' onClick={handleClick}>
                    <h1 className="app-name">Sleeper Sheets</h1>
                </Link>
                <User />
            </div>
        </>
    );
}