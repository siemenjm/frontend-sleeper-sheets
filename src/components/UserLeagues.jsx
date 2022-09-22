import { Context } from "context/Context";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import League from "./League";

export default function UserLeagues(props) { 
    const BASE_URL = 'https://api.sleeper.app/v1/user/';
    const navigate = useNavigate();
    
    const [leagueList, setLeagueList] = useState(null);
    const { sleeperUser, league, setLeague } = useContext(Context);

    async function getLeagues(sleeperId) {
        const URL = `${BASE_URL}${sleeperId}/leagues/nfl/2022`;
        try {
            const response = await fetch(URL);
            const allLeagues = await response.json();

            setLeague(allLeagues[0]);
            navigate(`/user/${sleeperId}/league/${allLeagues[0].league_id}/matchup/`);

            setLeagueList(allLeagues);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getLeagues(sleeperUser.user_id);
    }, []);

    if (!leagueList) {
        return <h2>Loading league data...</h2>;
    }

    const displayedLeagues = leagueList.map((singleLeague) => {
        return (<League singleLeague={singleLeague} league={league} setLeague={setLeague} key={singleLeague.league_id}/>);
    });

    return ( 
        <div className="league-list">
            {displayedLeagues}
        </div>
    );
}