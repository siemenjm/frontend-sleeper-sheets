import './styles/main.css';
import Sidebar from "components/Sidebar";
import { useEffect, useState } from 'react';
import Main from 'components/Main';
import { Context } from 'context/Context';

const BASE_URL = 'https://api.sleeper.app/v1/';

export default function App() {
    const [user, setUser] = useState(null);
    const [league, setLeague] = useState(null);
    const [subPage, setSubPage] = useState('matchup/');
    const [weeklyData, setWeeklyData] = useState({
        weeklyStats: null,
        WeeklyProj: null
    });

    async function getWeeklyStats() {
        const URL = `${BASE_URL}stats/nfl/regular/2022/2`;

        try {
            const response = await fetch(URL);
            const allWeeklyStats = await response.json();

            return allWeeklyStats;
        } catch(err) {
            console.log(err);
        }
    }

    async function getWeeklyProjs() {
        const URL = `${BASE_URL}projections/nfl/regular/2022/2`;

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
            <Context.Provider value={{ BASE_URL, user, setUser, league, setLeague, subPage, setSubPage, weeklyData }}>
                <Sidebar />
                <Main />
            </Context.Provider>
        </>
    );
}
