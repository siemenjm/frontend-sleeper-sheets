import { Context } from "context/Context";
import { useContext } from "react";

export default function DefStats({ player }) {
    const { weeklyStats } = useContext(Context);
    const playerStats = weeklyStats[player.player_id];

    if (!playerStats) {
        return <h2>Loading stats...</h2>
    }

    console.log(playerStats);

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