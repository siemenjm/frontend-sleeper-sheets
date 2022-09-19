import { Context } from "context/Context";
import { useContext } from "react";

export default function WRandTEStats({ player }) {
    const { weeklyData } = useContext(Context);
    const playerStats = weeklyData.weeklyStats[player.player_id];
    const playerProj = weeklyData.weeklyProj[player.player_id];
    
    if (Object.keys(playerProj).length === 0) {
        return <p>{`${player.full_name} is Out`}</p>;
    }

    if (!playerStats) {
        return <p>{`${player.full_name} is yet to play`}</p>;
    }
    
    function printReceptions() {
        if (playerStats.rec_tgt > 0) {
            return `${playerStats.rec}/${playerStats.rec_tgt} REC`;
        }
    }

    function printRecYards() {
        if (playerStats.rec_yd > 0) {
            return `${playerStats.rec_yd} YD`;
        }
    }

    function printRecTDs() {
        if (playerStats.rec_td > 0) {
            return `${playerStats.rec_td} TD`;
        }
    }


    function printFum() {
        if (playerStats.fum > 0) {
            return `${playerStats.fum} FUM`;
        }
    }

    function printFumLost() {
        if (playerStats.fum_lost > 0) {
            return `${playerStats.fum_lost} FUM LOST`;
        }
    }

    let printFuncArray = [
        printReceptions,
        printRecYards,
        printRecTDs,
        printFum,
        printFumLost
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