import { Context } from "context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router";

export default function DeleteMessage({ setDeleteMessage, logoutUser }) {
    const navigate = useNavigate();
    const { DB_URL, currentUser } = useContext(Context);

    function handleClick(e) {
        setDeleteMessage(null);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const URL = `${DB_URL}users/${currentUser._id}`;
            const options = {
                method: 'DELETE',
            };

            const response = await fetch(URL, options);
            const deletedUser = await response.json();
            console.log(deletedUser);

            navigate('/');
            logoutUser();

        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="delete-message-container">
            <p>Are you sure you want to delete your account?</p>
            <div>
                <form onSubmit={handleSubmit} className="delete-user-form">
                    <button className="delete-yes-btn" type="submit">Yes</button>
                </form>
                <button onClick={handleClick} className="delete-no-btn">No</button>
            </div>
        </div>
    );
}