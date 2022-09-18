export default function MatchupTab({ userMatchup, opponentMatchup}) {
    return (
        <div className="matchup-tab">
            <div className="user-stats">
                <h2>user roster_id: {userMatchup.roster_id}</h2>
                <h2>user points: {userMatchup.points}</h2>
            </div>
            <div className="opponent-stats">
                <h2>opponent roster_id: {opponentMatchup.roster_id}</h2>
                <h2>opponent points: {opponentMatchup.points}</h2>
            </div>
        </div>
    );
}