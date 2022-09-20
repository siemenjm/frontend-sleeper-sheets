import UserPlayer from "./UserPlayer";

export default function UserBenchList({ roster, matchup }) {
    const players = matchup.players;
    const starters = matchup.starters;
    const IRPlayers = roster.reserve;
    const points = matchup.players_points;

    const benchPlayers = players.filter((player) => {
        return !starters.includes(player) && !IRPlayers.includes(player);
    });

    const benchPoints = benchPlayers.map((player) => {
        return points[player];
    });

    const allBenchPlayers = benchPlayers.map((player, index) => {
        return <UserPlayer playerId={player} points={benchPoints[index]} key={player} />;
    });


    return (
        <div className="all-bench">
            {allBenchPlayers}
        </div>
    );
}