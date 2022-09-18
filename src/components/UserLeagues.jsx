import { useEffect, useState } from "react";
import League from "./League";

export default function UserLeagues({userId}) { 
    const BASE_URL = 'https://api.sleeper.app/v1/user/';
    
    const [leagueList, setLeagueList] = useState(null);

    async function getLeagues(userId) {
        const URL = `${BASE_URL}${userId}/leagues/nfl/2022`;
        try {
            const response = await fetch(URL);
            const allLeagues = await response.json();

            setLeagueList(allLeagues);
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
        return (<League league={league} key={league.league_id}/>);
    });

    return ( 
        <div className="league-list">
            {displayedLeagues}
        </div>
    );
}