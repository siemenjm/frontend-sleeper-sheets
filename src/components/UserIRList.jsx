import { Context } from "context/Context";
import { useContext } from "react";
import UserPlayer from "./UserPlayer";

export default function UserIRList({ roster }) {
    const { currentLeague } = useContext(Context);

    const IRSlots = currentLeague.settings.reserve_slots;
    
    const allIR = roster.reserve;

    if (!allIR) {
        return (
            <div className="empty-IR">
                <h3>Empty</h3>
            </div>
        );
    }

    const allIRPlayers = [];
    for (let i = 0; i < IRSlots; i++) {
        let player;
        if (!allIR[i]) {
            player = <div className="empty-IR" key={i}><h3>Empty</h3></div>;
        } else {
            player = <UserPlayer playerId={allIR[i]} points={0.00} key={allIR[i]} />;
        }

        allIRPlayers.push(player);        
    }

    return (
        <div className="all-IR">
            {allIRPlayers}
        </div>
    );
}