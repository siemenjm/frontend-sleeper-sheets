import InfoHeader from "components/InfoHeader";
import PageHeader from "components/PageHeader";
import Pages from "components/Pages";
import { Context } from "context/Context";
import { useContext } from "react";

export default function LeaguePage(props) {
    const { league, currentUser } = useContext(Context);

    if (!currentUser) {
        return <h2>Loading league data...</h2>;
    }

    return (
        <>
            <InfoHeader league={league}/>
            <section className="tab-container">
                <PageHeader />
                <Pages />
            </section>
        </>
    );
}