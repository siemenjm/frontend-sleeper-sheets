import InfoHeader from "components/InfoHeader";
import PageHeader from "components/PageHeader";
import Pages from "components/Pages";
import { Context } from "context/Context";
import { useContext } from "react";

export default function LeaguePage(props) {
    const { currentLeague } = useContext(Context);

    if (!currentLeague) {
        return <h2>Loading league data...</h2>;
    }

    return (
        <>
            <InfoHeader currentLeague={currentLeague}/>
            <section className="tab-container">
                <PageHeader />
                <Pages />
            </section>
        </>
    );
}