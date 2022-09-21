import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "context/Context";

export default function League({league, setLeague, subPage}) {
    const { user } = useContext(Context);
    
    function handleClick(e) {
        setLeague(league);
    } 

    return ( 
        <div className="league">
            <Link onClick={handleClick} to={`/user/${user.user_id}/league/${league.league_id}/${subPage}`}>
                <Avatar avatar={league.avatar} type='league'/>
                <p className="league-name">{league.name}</p>
            </Link>
        </div>
    );
}