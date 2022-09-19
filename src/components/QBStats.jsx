import { Context } from "context/Context";
import { useContext } from "react";

export default function QBStats({ player }) {
    const { weeklyData } = useContext(Context);
    const playerStats = weeklyData.weeklyStats[player.player_id];
    const playerProj = weeklyData.weeklyProj[player.player_id];

    console.log('playerName: ', player.full_name)
    console.log('playerStats: ', playerStats)
    
    if (Object.keys(playerProj).length === 0) {
        return <p>{`${player.full_name} is Out`}</p>;
    }

    if (!playerStats) {
        return <p>{`${player.full_name} is yet to play`}</p>;
    }

    function printCompletions() {
        if (playerStats.pass_att > 0) {
            return `${playerStats.pass_cmp}/${playerStats.pass_att} CMP`;
        }
    }

    function printPassYards() {
        if (playerStats.pass_yd !== 0 && !undefined) {
            return `${playerStats.pass_yd} YD`;
        }
    }

    function printPassTDs() {
        if (playerStats.pass_td > 0) {
            return `${playerStats.pass_td} TD`;
        }
    }

    function printINTs() {
        if (playerStats.pass_int > 0) {
            return `${playerStats.pass_int} INT`;
        }
    }

    function printRushAtt() {
        if (playerStats.rush_att > 0) {
            return `${playerStats.rush_att} CAR`;
        }
    }

    function printRushYards() {
        if (playerStats.rush_yd !== 0) {
            return `${playerStats.rush_yd} YD`;
        }
    }

    function printRushTDs() {
        if (playerStats.rush_td > 0) {
            return `${playerStats.rush_td} TD`;
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
        printCompletions,
        printPassYards,
        printPassTDs,
        printINTs,
        printRushAtt,
        printRushYards,
        printRushTDs,
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