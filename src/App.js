import './styles/main.css';
import Sidebar from "components/Sidebar";
import { useState } from 'react';
import Main from 'components/Main';

const BASE_URL = 'https://api.sleeper.app/v1/';

export default function App() {
    const [user, setUser] = useState(null);

    return (
        <>
            <Sidebar BASE_URL={BASE_URL} user={user} setUser={setUser}/>
            <Main />
            {/* <InfoHeader />
            <section className="page">
                <PageHeader />
                <Pages />
            </section> */}
        </>
    );
}
