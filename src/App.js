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
    const [weeklyStats, setWeeklyStats] = useState(null);

    async function getWeeklyStats() {
        const URL = `${BASE_URL}stats/nfl/regular/2022/2`;

        try {
            const response = await fetch(URL);
            const allWeeklyStats = await response.json();

            setWeeklyStats(allWeeklyStats);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getWeeklyStats();
    }, []);

    return (
        <>
            <Context.Provider value={{ BASE_URL, user, setUser, league, setLeague, subPage, setSubPage, weeklyStats, setWeeklyStats }}>
                <Sidebar />
                <Main />
            </Context.Provider>
        </>
    );
}
