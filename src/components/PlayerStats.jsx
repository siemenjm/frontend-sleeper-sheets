import RBStats from "./RBStats";
import QBStats from "./QBStats";
import WRandTEStats from "./WRandTEStats";

export default function PlayerStats({ player, positions }) {
    let positionComponent;
    
    if (positions.includes('QB')) {
        positionComponent = <QBStats player={player}/>
    } else if (positions.includes('RB')) {
        positionComponent = <RBStats player={player}/>
    } else if (positions.includes('WR') || positions.includes('TE')) {
        positionComponent = <WRandTEStats player={player}/>;
    } 
    
    return (
        <div className="player-stats">
            {positionComponent}
        </div>
    );
}