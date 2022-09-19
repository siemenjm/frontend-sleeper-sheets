import { Context } from 'context/Context';
import { useContext } from 'react';
import playerData from '../temp_data/temp_player_data.json';
import PlayerStats from './PlayerStats';

export default function UserPlayer({ playerId, points}) {
    const staticPlayerInfo = playerData[playerId];
    const fantasyPositions = staticPlayerInfo.fantasy_positions.join();

    const { league, weeklyData } = useContext(Context);
    const weeklyProj = weeklyData.weeklyProj;

    if (!weeklyProj || !league) {
        return <h2>Loading data...</h2>
    }

    function getLeagueScoringType(league) {
        if (league.scoring_settings.rec === 0) {
            return 'pts_std';
        } else if (league.scoring_settings.rec === 0.5) {
            return 'pts_half_ppr';
        } else {
            return 'pts_ppr';
        }
    }

    console.log(weeklyProj[playerId]);
    const scoring = getLeagueScoringType(league);

    return (
        <>
            <div className="player-summary">
                <h3>{staticPlayerInfo.full_name ? staticPlayerInfo.full_name : staticPlayerInfo.team}</h3>
                <p>{fantasyPositions} - {staticPlayerInfo.team}</p>
                <p className='player-current-points'>{points}</p>
                <PlayerStats player={staticPlayerInfo} positions={staticPlayerInfo.fantasy_positions} />
                <p className="projected-points">{weeklyProj[playerId][scoring]}</p>
            </div>
        </>
    );
}