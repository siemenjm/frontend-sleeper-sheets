import DefaultPage from "pages/DefaultPage";
import LeaguePage from "pages/LeaguePage";
import { Route, Routes } from "react-router";

export default function Main({BASE_URL, user}) { 
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<DefaultPage />} />
                <Route path="/user/:userId/league/:leagueId/*" element={<LeaguePage BASE_URL={BASE_URL} user={user}/>} />
                <Route path="*" element={<DefaultPage />} />
            </Routes>
        </main>
    );
}