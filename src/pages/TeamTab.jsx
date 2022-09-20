import StarterPositions from "components/StarterPositions";
import UserBenchList from "components/UserBenchList";
import UserStarterList from "components/UserStarterList";

export default function TeamTab({ userId, getUserMatchup }) {
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
                <UserBenchList matchup={currentLineup}/>
            </div>
        </div>
    );
}