import LeagueTab from "pages/LeagueTab";
import MatchupTab from "pages/MatchupTab";
import TeamTab from "pages/TeamTab";
import { Routes, Route } from "react-router";

export default function Pages(props) {
    return (
        <>
            <Routes>
                <Route path={`/matchup/`} element={<MatchupTab />} />
                <Route path={`/team/`} element={<TeamTab />} />
                <Route path={`/league/`} element={<LeagueTab />} />
            </Routes>
        </>
    );
}