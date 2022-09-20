import { Context } from "context/Context";
import LeagueTab from "pages/LeagueTab";
import MatchupTab from "pages/MatchupTab";
import TeamTab from "pages/TeamTab";
import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router";

export default function Pages(props) {
    const { BASE_URL, user, league } = useContext(Context);
    const [data, setData] = useState({
        users: null,
        rosters: null,
        matchups: null
    });

    async function getUsers() {
        const URL = `${BASE_URL}league/${league.league_id}/users`;
        
        try {
            const response = await fetch(URL);
            const allUsers = await response.json();

            return allUsers;
        } catch(err) {
            console.log(err);
        }
    }

    async function getRosters() {
        const URL = `${BASE_URL}league/${league.league_id}/rosters`;

        try {
            const response = await fetch(URL);
            const allRosters = await response.json();

            return allRosters;
        } catch(err) {
            console.log(err);
        }
    }

    async function getMatchups() {
        const URL = `${BASE_URL}league/${league.league_id}/matchups/2`;

        try {
            const response = await fetch(URL);
            const allMatchups = await response.json();

            return allMatchups;
        } catch(err) {
            console.log(err);
        }
    }

    async function getData() {
        const allUsers = await getUsers();
        const allRosters = await getRosters();
        const allMatchups = await getMatchups();

        setData({
            users: allUsers,
            rosters: allRosters,
            matchups: allMatchups
        });
    }

    useEffect(() => {
        getData();
    }, [league]);

    if (!data.users || !data.rosters || !data.matchups) {
        return <h2>Loading data...</h2>
    }

    // get user info from users by user_id
    function getUserInfo(userId) {
        const specificUser = data.users.filter((user) => {
            return user.user_id === userId;
        });

        return specificUser[0];
    }

    // get user roster from rosters by owner_id(user_id)
    function getUserRoster(userId) {
        return data.rosters.filter((roster) => {
            return roster.owner_id === userId;
        })[0];
    }

    // get user matchup from matchups by roster_id
    function getUserMatchup(userId) {
        const rosterId = getUserRoster(userId).roster_id;
        return data.matchups.filter((matchup) => {
            return matchup.roster_id === rosterId;
        })[0];
    }

    // get user's opponents matchup
    function getUserOpponentMatchup(userId) {
        const rosterId = getUserRoster(userId).roster_id;
        const matchupId = getUserMatchup(userId).matchup_id;
        return data.matchups.filter((matchup) => {
            return matchup.matchup_id === matchupId && matchup.roster_id !== rosterId;
        })[0];
    }

    // get user's opponent's roster
    function getUserOpponentRoster(userId) {
        const userOpponentMatchup = getUserOpponentMatchup(userId);
        return data.rosters.filter((roster) => {
            return roster.roster_id === userOpponentMatchup.roster_id;
        })[0];
    }

    // get user's opponent's id

    function getUserOpponentId(userId) {
        const userOpponentRoster = getUserOpponentRoster(userId);
        return userOpponentRoster.owner_id;
    }

    return (
        <>
            <Routes>
                <Route path={`/matchup/`} element={<MatchupTab userId={user.user_id} getUserInfo={getUserInfo} getUserOpponentId={getUserOpponentId} getUserRoster={getUserRoster}  getUserMatchup={getUserMatchup} />} />
                <Route path={`/team/`} element={<TeamTab userId={user.user_id}  getUserRoster={getUserRoster} getUserMatchup={getUserMatchup} />} />
                {/* <Route path={`/team/`} element={<TeamTab userMatchup={userMatchup[0]} />} /> */}
                <Route path={`/league/`} element={<LeagueTab />} />
            </Routes>
        </>
    );
}