import { Context } from "context/Context";
import { useContext } from "react";

export default function StarterPositions(props) {
    const { currentLeague } = useContext(Context);

    const allPositions = currentLeague.roster_positions;
    const starterPositions = allPositions.filter((position) => {
        return position !== 'BN';
    });

    const displayedStarterPositions = starterPositions.map((position, index) => {
        return <div className="position-label" key={index}><h3 className={`${position}-label`}>{position}</h3></div>;
    });

    return (
        <div className="starter-positions">
            {displayedStarterPositions}
        </div>
    );
}