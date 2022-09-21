import './styles/main.css';
import Sidebar from "components/Sidebar";
import { useEffect, useState } from 'react';
import Main from 'components/Main';
import { Context } from 'context/Context';
import { useParams } from 'react-router';

const URLS = {
    API_BASE_URL: 'https://api.sleeper.app/v1/',
    APP_BASE_URL: 'http://localhost:3000/',
    FETCH_USER_URL: 'https://api.sleeper.app/v1/user/'
};

export default function App() {
    /**
     * State:
     * - currentUser
     * ----- currentUser logs in, then ALL league data, stats, projections, nfl-state are fetched
     * - all leagues
     * - users for each league
     * - rosters for each league
     * - matchups for each league
    */

    const [currentUser, setCurrentUser] = useState(null);
    const [currentLeague, setCurrentLeague] = useState(null);
    const [allLeagues, setAllLeagues] = useState(null);

    



    // ----- PRE-REFACTOR CODE -----
    // const [user, setUser] = useState(null);
    // const [league, setLeague] = useState(null);
    // const [subPage, setSubPage] = useState('matchup/');
    const [weeklyData, setWeeklyData] = useState({
        weeklyStats: null,
        WeeklyProj: null
    });

    async function getWeeklyStats() {
        const URL = `${URLS.API_BASE_URL}stats/nfl/regular/2022/2`;

        try {
            const response = await fetch(URL);
            const allWeeklyStats = await response.json();

            return allWeeklyStats;
        } catch(err) {
            console.log(err);
        }
    }

    async function getWeeklyProjs() {
        const URL = `${URLS.API_BASE_URL}projections/nfl/regular/2022/2`;

        try {
            const response = await fetch(URL);
            const allWeeklyProj = await response.json();

            return allWeeklyProj;
        } catch(err) {
            console.log(err);
        }
    }

    async function getWeeklyData() {
        const allWeeklyStats = await getWeeklyStats();
        const allWeeklyProj = await getWeeklyProjs();

        setWeeklyData({
            weeklyStats: allWeeklyStats,
            weeklyProj: allWeeklyProj
        });
    }



    useEffect(() => {
        getWeeklyData();
    }, []);

    return (
        <>
            <Context.Provider value={{ URLS, currentUser, setCurrentUser, currentLeague, setCurrentLeague, allLeagues, setAllLeagues, weeklyData }}>
                <Sidebar />
                <Main />
            </Context.Provider>
        </>
    );


    // return (
    //     <>
    //         <Context.Provider value={{ BASE_URL, user, setUser, league, setLeague, subPage, setSubPage, weeklyData }}>
    //             <Sidebar />
    //             <Main />
    //         </Context.Provider>
    //     </>
    // );
}
