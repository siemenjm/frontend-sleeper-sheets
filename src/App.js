import './styles/main.css';
import Sidebar from "components/Sidebar";
import { useState } from 'react';
import Main from 'components/Main';
import { Context } from 'context/Context';

const BASE_URL = 'https://api.sleeper.app/v1/';

export default function App() {
    const [user, setUser] = useState(null);
    const [league, setLeague] = useState(null);
    const [subPage, setSubPage] = useState('matchup/');

    return (
        <>
            <Context.Provider value={{ BASE_URL, user, setUser, league, setLeague, subPage, setSubPage }}>
                <Sidebar />
                <Main />
            </Context.Provider>
        </>
    );
}
