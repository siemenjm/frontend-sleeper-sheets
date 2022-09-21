import { Context } from "context/Context";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import League from "./League";

export default function UserLeagues(props) { 
    const { URLS, currentUser, currentLeague, setCurrentLeague, allLeagues, setAllLeagues } = useContext(Context);
    const FETCH_USER_URL = URLS.FETCH_USER_URL;
    const navigate = useNavigate();

    async function getAllLeagues(userId) {
        const URL = `${FETCH_USER_URL}${userId}/leagues/nfl/2022`;
        try {
            const response = await fetch(URL);
            const allLeaguesData = await response.json();

            setCurrentLeague(allLeaguesData[0]);
            // navigate(`/user/${currentUser}/league/${allLeagues[0].league_id}/matchup/`);
            
            setAllLeagues(allLeaguesData);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllLeagues(currentUser.user_id);
    }, []);

    if (!allLeagues) {
        return <h2>Loading league data...</h2>;
    }

    const displayedLeagues = allLeagues.map((league) => {
        return (<League league={league} setCurrentLeague={setCurrentLeague} key={league.league_id}/>);
    });

    return ( 
        <div className="league-list">
            {displayedLeagues}
        </div>
    );
}