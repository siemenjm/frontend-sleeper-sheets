import MatchupSummary from "components/MatchupSummary";

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
                    <MatchupSummary user={currentUser} matchup={userMatchup} />
                </div>
                <div className="opponent-matchup-summary">
                    <MatchupSummary user={currentOpponent} matchup={opponentMatchup} />
                </div>
            </div>
            
        </div>
    );
}