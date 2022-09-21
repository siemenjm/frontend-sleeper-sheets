import InfoHeader from "components/InfoHeader";
import PageHeader from "components/PageHeader";
import Pages from "components/Pages";
import { Context } from "context/Context";
import { useContext, useEffect } from "react";
import { useParams } from "react-router";

export default function LeaguePage(props) {
    const { currentLeague, allParams, setAllParams } = useContext(Context);
    
    const params = useParams();
    console.log(params);
    
    // if (!allParams.currentUserId || !allParams.currentLeagueId) {
    //     setAllParams({
    //         currentUserId: params.userId,
    //         currentLeagueId: params.leagueId
    //     });
    // }

    useEffect(() => {
        setAllParams({
            currentUserId: params.userId,
            currentLeagueId: params.leagueId
        });
    }, []);
    

    if (!currentLeague) {
        return <h2>Loading league data...</h2>;
    }

    return (
        <main>
            <InfoHeader currentLeague={currentLeague}/>
            <section className="tab-container">
                <PageHeader />
                <Pages />
            </section>
        </main>
    );
}