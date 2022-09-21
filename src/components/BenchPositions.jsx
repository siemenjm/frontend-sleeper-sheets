import { Context } from "context/Context";
import { useContext } from "react";

export default function BenchPositions(props) {
    const { league } = useContext(Context);

    const allPositions = league.roster_positions;
    const benchPositions = allPositions.filter((position) => {
        return position === 'BN';
    });

    const taxiSlots = league.settings.taxi_slots;

    const benchCount = benchPositions.length + taxiSlots;
    let displayedBenchPositions = [];
    for (let i = 0; i < benchCount; i++) {
        const position = <div className="position-label" key={i}><h3 className={`BEN-label`}>BEN</h3></div>;
        displayedBenchPositions.push(position);
    }

    return (
        <div className="bench-positions">
            {displayedBenchPositions}
        </div>
    );
}