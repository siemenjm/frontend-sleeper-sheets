import { useParams } from "react-router";

export default function LeaguePage({BASE_URL, user}) {
    const { id } = useParams();

    return (
        <div className="league-page">
            <h2>{BASE_URL}</h2>
            <h2>{user.username}</h2>
            <h2>{id}</h2>
        </div>
    );
}