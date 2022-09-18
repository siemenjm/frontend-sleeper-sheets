import { Context } from "context/Context";
import LeagueTab from "pages/LeagueTab";
import MatchupTab from "pages/MatchupTab";
import TeamTab from "pages/TeamTab";
import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router";

export default function Pages(props) {
    const { BASE_URL, user, league } = useContext(Context);
    const [rosters, setRosters] = useState(null);
    const [matchups, setMatchups] = useState(null);

    async function getRosters() {
        const URL = `${BASE_URL}league/${league.league_id}/rosters`;
        
        try {
            const response = await fetch(URL);
            const allRosters = await response.json();

            setRosters(allRosters);
        } catch(err) {
            console.log(err);
        }
    }

    async function getMatchups() {
        const URL = `${BASE_URL}league/${league.league_id}/matchups/1`;
        
        try {
            const response = await fetch(URL);
            const allMatchups = await response.json();

            setMatchups(allMatchups);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRosters();
        getMatchups();
    }, []);

    console.log('Rosters: ', rosters);
    console.log('Matchups: ', matchups);

    if (!rosters || !matchups) {
        return <h2>Loading data...</h2>
    }

    const userRoster = rosters.filter((roster) => {
        return roster.owner_id === user.user_id;
    });

    const userMatchup = matchups.filter((matchup) => {
        return userRoster[0].roster_id === matchup.roster_id;
    });

    const opponentMatchup = matchups.filter((matchup) => {
        return userMatchup[0].matchup_id === matchup.matchup_id && userRoster[0].roster_id !== matchup.roster_id;
    });

    console.log('userRoster: ', userRoster[0]);
    console.log('userMatchup: ', userMatchup[0]);
    console.log('opponentMatchup: ', opponentMatchup[0]);

    return (
        <>
            <Routes>
                <Route path={`/matchup/`} element={<MatchupTab userMatchup={userMatchup[0]} opponentMatchup={opponentMatchup[0]} />} />
                <Route path={`/team/`} element={<TeamTab userMatchup={userMatchup[0]} />} />
                <Route path={`/league/`} element={<LeagueTab />} />
            </Routes>
        </>
    );
}