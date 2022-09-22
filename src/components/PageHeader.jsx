import { Link, useParams } from "react-router-dom";

export default function PageHeader(props) {
    const { userId, leagueId } = useParams();

    const tabs = [
        'Matchup',
        'Team',
        'League'
    ];

    const currentPath = window.location.pathname;
    const splitPath = currentPath.split('/');
    const currentTab = splitPath[splitPath.length - 2];

    const displayedLinks = tabs.map((tab) => {
        const path = tab.toLowerCase();

        let cssClass;
        if (path === currentTab) {
            cssClass = 'active-tab';
        }

        return <Link to={`/user/${userId}/league/${leagueId}/${path}/`} className={cssClass} key={`${leagueId}/${path}`}>{tab}</Link>;
    });
    
    return (
        <>
            <ul className="page-header">
                {displayedLinks}
            </ul>
        </>
    );
}