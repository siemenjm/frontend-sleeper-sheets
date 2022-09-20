import { Context } from "context/Context";
import { useContext } from "react";

export default function StarterPositions(props) {
    const { league } = useContext(Context);

    const allPositions = league.roster_positions;
    const starterPositions = allPositions.filter((position) => {
        return position !== 'BN';
    });

    const displayedStarterPositions = starterPositions.map((position, index) => {
        return <h3 className={`${position}-label`} key={index}>{position}</h3>;
    });

    return (
        <div className="positions">
            {displayedStarterPositions}
        </div>
    );
}