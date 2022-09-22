import DefaultPage from "pages/DefaultPage";
import LeaguePage from "pages/LeaguePage";
import LoadingPage from "pages/LoadingPage";
import { Route, Routes } from "react-router";

export default function Main({BASE_URL, user}) { 
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<DefaultPage />} />
                {/* <Route path="/user/" element={<LoadingPage />} /> */}
                <Route path="/user/:userId/league/:leagueId/*" element={<LeaguePage />} />
                <Route path="*" element={<DefaultPage />} />
            </Routes>
        </main>
    );
}