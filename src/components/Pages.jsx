import { Context } from "context/Context";
import LeagueTab from "pages/LeagueTab";
import MatchupTab from "pages/MatchupTab";
import TeamTab from "pages/TeamTab";
import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router";

export default function Pages(props) {
    const { BASE_URL, user, league } = useContext(Context);
    const [users, setUsers] = useState(null);
    const [rosters, setRosters] = useState(null);
    const [matchups, setMatchups] = useState(null);

    async function getUsers() {
        const URL = `${BASE_URL}league/${league.league_id}/users`;
        
        try {
            const response = await fetch(URL);
            const allUsers = await response.json();

            setUsers(allUsers);
        } catch(err) {
            console.log(err);
        }
    }

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
        const URL = `${BASE_URL}league/${league.league_id}/matchups/2`;
        
        try {
            const response = await fetch(URL);
            const allMatchups = await response.json();

            setMatchups(allMatchups);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUsers();
        getRosters();
        getMatchups();
    }, [league]);

    console.log('Users: ', users);
    console.log('Rosters: ', rosters);
    console.log('Matchups: ', matchups);

    if (!users || !rosters || !matchups) {
        return <h2>Loading data...</h2>
    }

    // get user info from users by user_id
    function getUserInfo(userId) {
        const specificUser = users.filter((user) => {
            return user.user_id === userId;
        });

        return specificUser[0];
    }

    // get user roster from rosters by owner_id(user_id)
    function getUserRoster(userId) {
        return rosters.filter((roster) => {
            return roster.owner_id === userId;
        })[0];
    }

    // get user matchup from matchups by roster_id
    function getUserMatchup(userId) {
        const rosterId = getUserRoster(userId).roster_id;
        return matchups.filter((matchup) => {
            return matchup.roster_id === rosterId;
        })[0];
    }

    // get user's opponents matchup
    function getUserOpponentMatchup(userId) {
        const rosterId = getUserRoster(userId).roster_id;
        const matchupId = getUserMatchup(userId).matchup_id;
        return matchups.filter((matchup) => {
            return matchup.matchup_id === matchupId && matchup.roster_id !== rosterId;
        })[0];
    }

    // get user's opponent's roster
    function getUserOpponentRoster(userId) {
        const userOpponentMatchup = getUserOpponentMatchup(userId);
        return rosters.filter((roster) => {
            return roster.roster_id === userOpponentMatchup.roster_id;
        })[0];
    }

    // get user's opponent's id

    function getUserOpponentId(userId) {
        const userOpponentRoster = getUserOpponentRoster(userId);
        return userOpponentRoster.owner_id;
    }

    console.log('userMatchup: ', getUserMatchup(user.user_id));
    console.log('userOpponentMatchup: ', getUserOpponentMatchup(user.user_id));

    return (
        <>
            <Routes>
                <Route path={`/matchup/`} element={<MatchupTab userId={user.user_id} getUserInfo={getUserInfo} getUserOpponentId={getUserOpponentId} getUserMatchup={getUserMatchup} />} />
                {/* <Route path={`/team/`} element={<TeamTab userMatchup={userMatchup[0]} />} /> */}
                <Route path={`/league/`} element={<LeagueTab />} />
            </Routes>
        </>
    );
}