import { LeagueContext } from "context/LeagueContext";
import { useContext, useEffect, useState } from "react";
import League from "./League";

export default function UserLeagues({userId}) { 
    const BASE_URL = 'https://api.sleeper.app/v1/user/';
    
    const [leagueList, setLeagueList] = useState(null);
    const [infoLeague, setInfoLeague] = useContext(LeagueContext);

    function handleClick(e) {
        console.log(e.target);
        setInfoLeague(e.target.value);
    }

    async function getLeagues(userId) {
        const URL = `${BASE_URL}${userId}/leagues/nfl/2022`;
        try {
            const response = await fetch(URL);
            const allLeagues = await response.json();

            setLeagueList(allLeagues);
            setInfoLeague(allLeagues[0]);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getLeagues(userId);
    }, []);

    if (!leagueList) {
        return <h2>Loading league data...</h2>;
    }

    const displayedLeagues = leagueList.map((league) => {
        return <League handleClick={handleClick} league={league} key={league.league_id}/>;
    });

    return ( 
        <div className="league-list">
            {displayedLeagues}
        </div>
    );
}