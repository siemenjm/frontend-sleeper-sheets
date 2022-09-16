import InfoHeader from "components/InfoHeader";
import PageHeader from "components/PageHeader";
import Pages from "components/Pages";
import Sidebar from "components/Sidebar";

export default function App() {
    return (
        <>
            <Sidebar />
            <InfoHeader />
            <section className="page">
                <PageHeader />
                <Pages />
            </section>
        </>
    );
}
