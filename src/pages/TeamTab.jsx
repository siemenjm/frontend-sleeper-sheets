import BenchPositions from "components/BenchPositions";
import IRPositions from "components/IRPositions";
import StarterPositions from "components/StarterPositions";
import UserBenchList from "components/UserBenchList";
import UserIRList from "components/UserIRList";
import UserStarterList from "components/UserStarterList";

export default function TeamTab({ userId, getUserRoster, getUserMatchup }) {
    const currentRoster = getUserRoster(userId);
    const currentLineup = getUserMatchup(userId);

    return (
        <div className="team-tab tab">
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