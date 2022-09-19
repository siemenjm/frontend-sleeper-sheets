import { Context } from "context/Context";
import { useContext } from "react";

export default function DefStats({ player }) {
    const { weeklyData } = useContext(Context);
    const playerStats = weeklyData.weeklyStats[player.player_id];
    const playerProj = weeklyData.weeklyProj[player.player_id];
    
    if (Object.keys(playerProj).length === 0) {
        return <p>{`${player.full_name} is Out`}</p>;
    }

    if (!playerStats) {
        return <p>{`${player.full_name} is yet to play`}</p>;
    }
    
    function printPTs() {
        return `${playerStats.pts_allow} PTS ALLOW`;
    }

    function printSacks() {
        if (playerStats.sack > 0) {
            return `${playerStats.sack} SACK`;
        }
    }

    function printFF() {
        if (playerStats.ff > 0) {
            return `${playerStats.ff} FF`;
        }
    }

    function printFumRec() {
        if (playerStats.fum_rec > 0) {
            return `${playerStats.fum_rec} FUM REC`;
        }
    }

    function printINTs() {
        if (playerStats.int > 0) {
            return `${playerStats.int} INT`;
        }
    }

    function printDefTDs() {
        if (playerStats.def_td > 0) {
            return `${playerStats.def_td} TD`;
        }
    }

    let printFuncArray = [
        printPTs,
        printSacks,
        printFF,
        printFumRec,
        printINTs,
        printDefTDs
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