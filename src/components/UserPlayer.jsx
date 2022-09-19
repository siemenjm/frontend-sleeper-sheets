export default function UserPlayer({ playerId, points}) {
    return (
        <>
            <div className="player-summary">
                <h3>PlayerId: {playerId}</h3>
                <h3>Points: {points}</h3>
            </div>
        </>
    );
}