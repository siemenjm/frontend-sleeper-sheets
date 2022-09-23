import { Context } from "context/Context";
import { useContext } from "react";

export default function EditSleeperForm({ editSleeperForm, setEditSleeperForm, getSleeperUser, setCurrentUser }) {
    const { DB_URL, currentUser } = useContext(Context);

    function handleChange(e) {
        setEditSleeperForm({ ...editSleeperForm, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const URL = `${DB_URL}users/${currentUser._id}`;
            const options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editSleeperForm),
            };

            const response = await fetch(URL, options);
            const updatedUser = await response.json();

            setCurrentUser(updatedUser);
            setEditSleeperForm(null);
            getSleeperUser(updatedUser);
        } catch(err) {
            console.log(err);
        }
    }
    
    return (
        <form onSubmit={handleSubmit} className="edit-sleeper-form">
            <label htmlFor="edit-sleeperName">Change Username</label>
            <input
                type="text"
                required
                name="sleeperName"
                id="edit-sleeperName"
                value={editSleeperForm.sleeperName}
                onChange={handleChange}
            />
            <button type="submit">Change Username</button>
        </form>
    );
}