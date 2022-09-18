export default function TeamTab({ userMatchup }) {
    return (
        <div className="team-tab">
            <div className="user-stats">
                <h2>user roster_id: {userMatchup.roster_id}</h2>
                <h2>user points: {userMatchup.points}</h2>
            </div>
        </div>
    );
}