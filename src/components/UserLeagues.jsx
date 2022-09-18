import { LeagueContext } from "context/LeagueContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import League from "./League";

export default function UserLeagues({userId}) { 
    const BASE_URL = 'https://api.sleeper.app/v1/user/';
    const navigate = useNavigate();
    
    const [leagueList, setLeagueList] = useState(null);
    const {league, setLeague} = useContext(LeagueContext);

    async function getLeagues(userId) {
        const URL = `${BASE_URL}${userId}/leagues/nfl/2022`;
        try {
            const response = await fetch(URL);
            const allLeagues = await response.json();

            setLeague(allLeagues[0]);
            navigate(`/league/${allLeagues[0].league_id}`);

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