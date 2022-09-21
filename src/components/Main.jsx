import DefaultPage from "pages/DefaultPage";
import LeaguePage from "pages/LeaguePage";
import { Route, Routes } from "react-router";
import Sidebar from "./Sidebar";

export default function Main(props) { 
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<DefaultPage />} />
                <Route path="/user/:userId/league/:leagueId/*" element={<LeaguePage />} />
                <Route path="*" element={<DefaultPage />} />
            </Routes>
        </main>
    );
}