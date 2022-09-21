import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "context/Context";

export default function League({league, setCurrentLeague}) {
    const { currentUser } = useContext(Context);
    
    function handleClick(e) {
        setCurrentLeague(league);
    } 

    return ( 
        <div className="league">
            <Link onClick={handleClick} to={`/user/${currentUser.user_id}/league/${league.league_id}/matchup/`}>
                <Avatar avatar={league.avatar} type='league'/>
                <p className="league-name">{league.name}</p>
            </Link>
        </div>
    );
}