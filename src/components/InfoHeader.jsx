import { LeagueContext } from "context/LeagueContext";
import { useContext } from "react";
import League from "./League";

export default function InfoHeader(props) {
    const [infoLeague] = useContext(LeagueContext);
    
    if (!infoLeague) {
        return (
            <div className="info-header">
                <h2>No league loaded (no user input)</h2>
            </div>
        );
    }

    return (
        <div className="info-header">
            <League league={infoLeague}/>
        </div>
    );
}