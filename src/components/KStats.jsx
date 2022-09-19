import { Context } from "context/Context";
import { useContext } from "react";

export default function KStats({ player }) {
    const { weeklyData } = useContext(Context);
    const playerStats = weeklyData.weeklyStats[player.player_id];

    if (!playerStats) {
        return <h2>Loading stats...</h2>
    }
    
    function printFGs() {
        if (playerStats.fga > 0) {
            return `${playerStats.fgm}/${playerStats.fga} FG`;
        }
    }

    function printXPs() {
        if (playerStats.xpa > 0) {
            return `${playerStats.xpm}/${playerStats.xpa} XP`;
        }
    }

    let printFuncArray = [
        printFGs,
        printXPs
    ];

    const printedStatsArray = printFuncArray.map((func) => {
        return func();
    });

    const filteredStatsArray = printedStatsArray.filter((stat) => {
        return stat !== undefined;
    });

    const printedStatsString = filteredStatsArray.join(', ');

    return (
        <p>{printedStatsString}</p>
    );
}