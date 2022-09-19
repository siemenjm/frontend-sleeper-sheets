import UserPlayer from "./UserPlayer";

export default function UserBenchList({ matchup }) {
    const players = matchup.players;
    const starters = matchup.starters;
    const points = matchup.players_points;
    console.log(players);
    console.log(starters);
    console.log(points);

    const benchPlayers = players.filter((player) => {
        return !starters.includes(player);
    });

    console.log(benchPlayers);
    const benchPoints = benchPlayers.map((player) => {
        return points[player];
    });

    console.log(benchPoints);

    const allBenchPlayers = benchPlayers.map((player, index) => {
        return <UserPlayer playerId={player} points={benchPoints[index]} key={player} />;
    });


    return (
        <>
            {allBenchPlayers}
        </>
    );
}