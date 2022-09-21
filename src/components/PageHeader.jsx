import { Link, useParams } from "react-router-dom";

export default function PageHeader(props) {
    const { userId, leagueId } = useParams();
    return (
        <>
            <ul className="page-header">
                <Link to={`/user/${userId}/league/${leagueId}/matchup/`}>Matchup</Link>
                <Link to={`/user/${userId}/league/${leagueId}/team/`}>Team</Link>
                <Link to={`/user/${userId}/league/${leagueId}/league/`}>League</Link>
            </ul>
        </>
    );
}