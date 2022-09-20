import MatchupSummary from "components/MatchupSummary";
import UserBenchList from "components/UserBenchList";
import UserStarterList from "components/UserStarterList";

export default function MatchupTab({ userId, getUserInfo, getUserOpponentId, getUserRoster, getUserMatchup }) {
    const currentUser = getUserInfo(userId);
    const currentOpponentId = getUserOpponentId(userId);
    const currentOpponent = getUserInfo(currentOpponentId);
    const userRoster = getUserRoster(userId);
    const userMatchup = getUserMatchup(userId);
    const opponentRoster = getUserRoster(currentOpponentId);
    const opponentMatchup = getUserMatchup(currentOpponentId);

    return (
        <div className="matchup-tab tab">
            <div className="matchup-summary">
                <div className="user-matchup-summary">
                    <MatchupSummary user={currentUser} roster={userRoster}  matchup={userMatchup} />
                </div>
                <div className="opponent-matchup-summary">
                    <MatchupSummary user={currentOpponent} roster={opponentRoster} matchup={opponentMatchup} />
                </div>
            </div>
            <div className="matchup-details">
                <div className="user-matchup-details">
                    <div className="user-starters">
                        <h2>Starters</h2>
                        <UserStarterList starters={userMatchup.starters} points={userMatchup.starters_points} />
                    </div>
                    <div className="user-bench">
                        <h2>Bench</h2>
                        <UserBenchList roster={userRoster} matchup={userMatchup}/>
                    </div>
                </div>
                <div className="opponent-matchup-details">
                    <div className="opponent-starters">
                        <h2>Starters</h2>
                        <UserStarterList starters={opponentMatchup.starters} points={opponentMatchup.starters_points} />
                    </div>
                    <div className="opponent-bench">
                        <h2>Bench</h2>
                        <UserBenchList roster={opponentRoster} matchup={opponentMatchup}/>
                    </div>
                </div>
            </div>
            
        </div>
    );
}