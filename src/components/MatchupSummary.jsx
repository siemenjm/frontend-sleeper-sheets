export default function MatchupSummary({ user, matchup }) {
    return (
        <>
            <img src={`https://sleepercdn.com/avatars/thumbs/${user.avatar}`} alt={`${user.display_name}'s avatar`} />
            <h2 className="username">@{user.display_name}</h2>
            <p className="team-name">{user.metadata.team_name ? user.metadata.team_name : user.display_name}</p>
            <p className="current-points">{matchup.points}</p>
        </>
    );
}