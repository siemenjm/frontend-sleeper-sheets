import { Context } from "context/Context";
import { useContext } from "react";

export default function BenchPositions(props) {
    const { league } = useContext(Context);

    const allPositions = league.roster_positions;
    const benchPositions = allPositions.filter((position) => {
        return position === 'BN';
    });

    const benchCount = benchPositions.length;
    let displayedBenchPositions = [];
    for (let i = 0; i < benchCount; i++) {
        const position = <div className="position-label"><h3 className={`BEN-label`} key={i}>BEN</h3></div>;
        displayedBenchPositions.push(position);
    }
    // const displayedBenchPositions = starterPositions.map((position, index) => {
    //     return <div className="position-label"><h3 className={`${position}-label`} key={index}>{position}</h3></div>;
    // });

    return (
        <div className="bench-positions">
            {displayedBenchPositions}
        </div>
    );
}