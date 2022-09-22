import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "context/Context";

export default function League({ singleLeague, league, setLeague }) {
    const { sleeperUser } = useContext(Context);

    let activeLeague;
    if (singleLeague === league){
        activeLeague = 'active-league';
    }
    
    function handleClick(e) {
        setLeague(singleLeague);
    } 

    return ( 
        <div className={`league ${activeLeague}`}>
            <Link onClick={handleClick} to={`/user/${sleeperUser.user_id}/league/${singleLeague.league_id}/matchup`}>
                <Avatar avatar={singleLeague.avatar} type='league'/>
                <p className="league-name">{singleLeague.name}</p>
            </Link>
        </div>
    );
}