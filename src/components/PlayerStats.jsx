import RBStats from "./RBStats";
import QBStats from "./QBStats";

export default function PlayerStats({ player, positions }) {
    let positionComponent;
    
    if (positions.includes('QB')) {
        positionComponent = <QBStats player={player}/>
    } else if (positions.includes('RB')) {
        positionComponent = <RBStats player={player}/>
    } else if (positions.includes('WR') || positions.includes('TE')) {

    }
    
    return (
        <div className="player-stats">
            {positionComponent}
        </div>
    );
}