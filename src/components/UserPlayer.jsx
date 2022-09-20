import { Context } from 'context/Context';
import { useContext } from 'react';
import playerData from '../temp_data/temp_player_data.json';
import PlayerStats from './PlayerStats';

export default function UserPlayer({ playerId, points }) {
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
    const projectedPoints = weeklyProj[playerId][scoring];

    return (
        <>
            <div className="player-summary">
                <div className="top-row">
                    <img src={fantasyPositions === 'DEF' ? `https://sleepercdn.com/images/team_logos/nfl/${staticPlayerInfo.team.toLowerCase()}.png` : `https://sleepercdn.com/content/nfl/players/${playerId}.jpg`} alt={staticPlayerInfo.full_name} className="player-img" />
                    <img src={`https://sleepercdn.com/images/team_logos/nfl/${staticPlayerInfo.team.toLowerCase()}.png`} alt={`${staticPlayerInfo.team} logo`} className="player-team-logo" />
                    <h3 className='player-name'>{staticPlayerInfo.full_name ? staticPlayerInfo.full_name : staticPlayerInfo.team}</h3>
                    <p className='player-pos-team'>{fantasyPositions} - {staticPlayerInfo.team}</p>
                    <p className='player-current-points'>{points.toFixed(2)}</p>
                </div>
                <div className="bottom-row">
                    <PlayerStats player={staticPlayerInfo} positions={staticPlayerInfo.fantasy_positions} />
                    <p className="player-projected-points">{projectedPoints ? projectedPoints : '0.00'}</p>
                </div>
            </div>
        </>
    );
}