import { Link, useParams } from "react-router-dom";

export default function PageHeader(props) {
    const { id } = useParams();
    return (
        <>
            <ul className="page-header">
                <Link to={`/league/${id}/matchup/`}>Matchup</Link>
                <Link to={`/league/${id}/team/`}>Team</Link>
                <Link to={`/league/${id}/league/`}>League</Link>
            </ul>
        </>
    );
}