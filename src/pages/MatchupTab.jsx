export default function MatchupTab({ userId, getUserInfo, getUserOpponentId, getUserMatchup }) {
    const currentUser = getUserInfo(userId);
    const currentOpponentId = getUserOpponentId(userId);
    const currentOpponent = getUserInfo(currentOpponentId);
    const userMatchup = getUserMatchup(userId);
    const opponentMatchup = getUserMatchup(currentOpponentId);

    return (
        <div className="matchup-tab">
            <div className="matchup-summary">
                <div className="user-matchup-summary">
                    <img src={`https://sleepercdn.com/avatars/thumbs/${currentUser.avatar}`} alt={`${currentUser.display_name}'s avatar`} />
                    <h2 className="username">@{currentUser.display_name}</h2>
                    <p className="team-name">{currentUser.metadata.team_name ? currentUser.metadata.team_name : currentUser.display_name}</p>
                    <p className="current-points">{userMatchup.points}</p>
                </div>
                <div className="opponent-matchup-summary">
                    <img src={`https://sleepercdn.com/avatars/thumbs/${currentOpponent.avatar}`} alt={`${currentOpponent.display_name}'s avatar`} />
                    <h2 className="username">@{currentOpponent.display_name}</h2>
                    <p className="team-name">{currentOpponent.metadata.team_name ? currentOpponent.metadata.team_name : currentOpponent.display_name}</p>
                    <p className="current-points">{opponentMatchup.points}</p>
                </div>
            </div>
            
        </div>
    );
}