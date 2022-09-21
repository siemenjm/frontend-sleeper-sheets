import Avatar from "./Avatar";
import { Link } from "react-router-dom";

export default function League({league, setLeague, subPage}) {
    function handleClick(e) {
        setLeague(league);
    } 

    return ( 
        <div className="league">
            <Link onClick={handleClick} to={`/league/${league.league_id}/${subPage}`}>
                <Avatar avatar={league.avatar} type='league'/>
                <p className="league-name">{league.name}</p>
            </Link>
        </div>
    );
}