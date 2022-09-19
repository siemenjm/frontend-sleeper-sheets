import MatchupSummary from "components/MatchupSummary";
import UserStarterList from "components/UserStarterList";

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
            <div className="matchup-details">
                <div className="user-matchup-details">
                    <div className="user-starters">
                        <UserStarterList starters={userMatchup.starters} points={userMatchup.starters_points} />
                    </div>
                </div>
                <div className="opponent-matchup-details">
                    <div className="opponent-starters">
                        <UserStarterList starters={opponentMatchup.starters} points={opponentMatchup.starters_points} />
                    </div>
                </div>
            </div>
            
        </div>
    );
}