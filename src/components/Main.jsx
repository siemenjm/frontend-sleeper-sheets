import LeaguePage from "pages/LeaguePage";
import { Route, Routes } from "react-router";
import LoginPage from "pages/LoginPage";

export default function Main({BASE_URL, user}) { 
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route path="/user/:userId/league/:leagueId/*" element={<LeaguePage BASE_URL={BASE_URL} user={user}/>} />
                <Route path="*" element={<LoginPage />} />
            </Routes>
        </main>
    );
}