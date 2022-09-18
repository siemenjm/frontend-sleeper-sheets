import InfoHeader from "components/InfoHeader";
import PageHeader from "components/PageHeader";
import Pages from "components/Pages";
import { LeagueContext } from "context/LeagueContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

export default function LeaguePage({BASE_URL, user}) {
    const { id } = useParams();
    const LEAGUE_URL = `${BASE_URL}/league/${id}`;

    const {league, setLeague} = useContext(LeagueContext);

    // async function getLeague() {
    //     try {
    //         const response = await fetch(LEAGUE_URL);
    //         const leagueData = await response.json();

    //         setLeague(leagueData);
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }

    // useEffect(() => {
    //     getLeague();
    // }, []);

    if (!league) {
        return <h2>Loading league data...</h2>;
    }

    return (
        <>
            <InfoHeader league={league}/>
            <section className="sub-page">
                <PageHeader />
                <Pages />
            </section>
        </>
    );
}