import './styles/main.css';
import InfoHeader from "components/InfoHeader";
import PageHeader from "components/PageHeader";
import Pages from "components/Pages";
import Sidebar from "components/Sidebar";
import { useState } from 'react';
import { LeagueContext } from 'context/LeagueContext';

const BASE_URL = 'https://api.sleeper.app/v1/';

export default function App() {
    const [user, setUser] = useState(null);
    const [infoLeague, setInfoLeague] = useState(null);

    return (
        <>
            <LeagueContext.Provider value={[infoLeague, setInfoLeague]}>
                <Sidebar BASE_URL={BASE_URL} user={user} setUser={setUser}/>
                <InfoHeader />
                <section className="page">
                    <PageHeader />
                    <Pages />
                </section>
            </LeagueContext.Provider>
        </>
    );
}
