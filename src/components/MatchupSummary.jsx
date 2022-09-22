import { Context } from "context/Context";
import { useContext } from "react";

export default function MatchupSummary({ user, roster, matchup }) {
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

    const scoring = getLeagueScoringType(league);
    const starterProj = matchup.starters.map((starter) => {
        if (starter === '0') {
            return 0.00;
        }
        return weeklyProj[starter][scoring];
    });

    const starterProjSum = starterProj.reduce((total, num) => {
        return total + num;
    }, 0);

    return (
        <>
            <div className="top-row">
                <img src={`https://sleepercdn.com/avatars/thumbs/${user.avatar}`} alt={`${user.display_name}'s avatar`} />
                <div className="name-info">
                    <h2 className="username">@{user.display_name}</h2>
                    <p className="team-name">Team {user.metadata.team_name ? user.metadata.team_name : user.display_name}</p>
                </div>
                <p className="current-points">{matchup.points}</p>
            </div>
            <div className="bottom-row">
                <p className="team-record">{roster.settings.wins} - {roster.settings.losses}</p>
                {starterProjSum > matchup.points ? <p className="projected-points red-points">{starterProjSum.toFixed(2)}</p> : <p className="projected-points green-points">{starterProjSum.toFixed(2)}</p>}
            </div>
        </>
    );
}