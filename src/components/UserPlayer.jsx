import playerData from '../temp_data/temp_player_data.json';
import PlayerStats from './PlayerStats';

export default function UserPlayer({ playerId, points}) {
    const staticPlayerInfo = playerData[playerId];
    const fantasyPositions = staticPlayerInfo.fantasy_positions.join();

    return (
        <>
            <div className="player-summary">
                <h3>{staticPlayerInfo.full_name ? staticPlayerInfo.full_name : staticPlayerInfo.team}</h3>
                <p>{fantasyPositions} - {staticPlayerInfo.team}</p>
                <p className='player-current-points'>{points}</p>
                <PlayerStats player={staticPlayerInfo} positions={staticPlayerInfo.fantasy_positions} />
            </div>
        </>
    );
}