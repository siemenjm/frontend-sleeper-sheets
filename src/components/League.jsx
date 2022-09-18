import Avatar from "./Avatar";
import { Link } from "react-router-dom";

export default function League({league}) {
    return ( 
        <div className="league">
            <Link to={`/league/${league.league_id}`}>
                <Avatar avatar={league.avatar} type='league'/>
                <p className="league-name">Name: {league.name}</p>
            </Link>
        </div>
    );
}