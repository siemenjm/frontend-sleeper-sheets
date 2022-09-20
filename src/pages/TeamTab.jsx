import BenchPositions from "components/BenchPositions";
import IRPositions from "components/IRPositions";
import StarterPositions from "components/StarterPositions";
import UserBenchList from "components/UserBenchList";
import UserIRList from "components/UserIRList";
import UserStarterList from "components/UserStarterList";

export default function TeamTab({ userId, getUserInfo, getUserRoster, getUserMatchup }) {
    const currentUser = getUserInfo(userId); 
    const currentRoster = getUserRoster(userId);
    const currentLineup = getUserMatchup(userId);

    return (
        <div className="team-tab tab">
            <div className="team-tab-user-info">
                <img src={`https://sleepercdn.com/avatars/thumbs/${currentUser.avatar}`} alt={`${currentUser.display_name}'s avatar`} />
                <div className="name-info">
                    <h2 className="username">@{currentUser.display_name}</h2>
                    <p className="team-name">Team {currentUser.metadata.team_name ? currentUser.metadata.team_name : currentUser.display_name}</p>
                </div>
            </div>
            <div className="user-starters">
                <h2>Starters</h2>
                <div className="starter-containers">
                    <StarterPositions />
                    <UserStarterList starters={currentLineup.starters} points={currentLineup.starters_points} />
                </div>
            </div>
            <div className="user-bench">
                <h2>Bench</h2>
                <div className="bench-containers">
                    <BenchPositions />
                    <UserBenchList roster={currentRoster} matchup={currentLineup}/>
                </div>
            </div>
            <div className="user-IR">
                <h2>Injured Reserve</h2>
                <div className="IR-containers">
                    <IRPositions />
                    <UserIRList roster={currentRoster}/>
                </div>
            </div>
        </div>
    );
}