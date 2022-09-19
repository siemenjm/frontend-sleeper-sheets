import QBStats from "./QBStats";

export default function PlayerStats({ player, positions }) {
    let positionComponent;
    
    if (positions.includes('QB')) {
        positionComponent = <QBStats player={player}/>
    }
    
    return (
        <div className="player-stats">
            {positionComponent}
        </div>
    );
}