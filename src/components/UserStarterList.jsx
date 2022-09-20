import UserPlayer from "./UserPlayer";

export default function UserStarterList({ starters, points }) {
    const allStarters = [];
    for (let i = 0; i < starters.length; i++) {
        allStarters.push(<UserPlayer playerId={starters[i]} points={points[i]} key={starters[i]} />);
    }

    return (
        <>
            {allStarters}
        </>
    );
}