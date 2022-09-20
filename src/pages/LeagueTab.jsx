import MatchupSummary from "components/MatchupSummary";

export default function LeagueTab({ users, rosters, matchups }) {
    let allMatchups = [...matchups];

    let pairedMatchups = [];
    for (let i = 0; i < allMatchups.length; i++) {
        let pairedMatchup = [allMatchups[i]];
        for (let j = i+1; j < allMatchups.length; j++) {
            if (allMatchups[j].matchup_id === pairedMatchup[0].matchup_id) {
                pairedMatchup.push(allMatchups[j]);
                allMatchups.splice(j, 1);
            }
        }

        pairedMatchups.push(pairedMatchup);
    }

    const displayedMatchups = pairedMatchups.map((pairedMatchup) => {
        const userMatchup  = pairedMatchup[0];
        const userRoster = getRosterFromMatchup(userMatchup);
        const currentUser = getUserFromRoster(userRoster);
        const opponentMatchup = pairedMatchup[1];
        const opponentRoster = getRosterFromMatchup(opponentMatchup);
        const currentOpponent = getUserFromRoster(opponentRoster);

        return (
            <div className="matchup-summary" key={pairedMatchup[0].matchup_id}>
                <div className="user-matchup-summary">
                    <MatchupSummary user={currentUser} roster={userRoster}  matchup={userMatchup} />
                </div>
                <div className="opponent-matchup-summary">
                    <MatchupSummary user={currentOpponent} roster={opponentRoster} matchup={opponentMatchup} />
                </div>
            </div>
        );
    });

    function getRosterFromMatchup(matchup) {
        return rosters.filter((roster) => {
            return roster.roster_id === matchup.roster_id;
        })[0];
    }

    function getUserFromRoster(roster) {
        return users.filter((user) => {
            return user.user_id === roster.owner_id;
        })[0];
    }

    return (
        <div className="league-tab tab">
            <h2>Matchups</h2>
            <div className="matchup-list">
                {displayedMatchups}
            </div>
        </div>
    );
}