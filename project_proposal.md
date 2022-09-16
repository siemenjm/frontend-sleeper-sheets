# Sleeper Sheets
Sleeper Sheets is a fantasy football app that consumes the Sleeper API to grab a user's Sleeper teams, leagues, stats, projections, etc. and display that data to the user using React. Sleeper currently has their own web application that does all of this, but I wanted to display that information in my own way and improve upon the design.

## Wireframe
![Main Screen](https://github.com/siemenjm/frontend-sleeper-sheets/blob/1352447957791c3521203682c19a0416b30ca388/proposal_screenshots/main_wireframs.png)

## MVP User Stories
As a user, I want to be able to:
* Only have to enter my Sleeper username to see my data
* See my data for each league that I participate in
* View my matchup for the current week
* View my current players in more detail
* View the current scores/matchups around the rest of the league
* View the current league standings
* View league transactions
* View a list/rankings of all the players
* Change which league that I am currently viewing
* Navigate through the views easily

## Sleeper API
Here is a link to the Sleeper API that the app will consume:

[Sleeper API](https://docs.sleeper.app/)

Note: I have tested these routes with Postman to make sure all data can be retrieved.

To get all their data, a user will first have to enter their username, which will get their "user_id" via <code>GET https://api.sleeper.app/v1/user/?username</code>.
```JSON
{
  "username": "sleeperuser",
  "user_id": "12345678",
  "display_name": "SleeperUser",
  "avatar": "cc12ec49965eb7856f84d71cf85306af"
}
```

Now that we have the "user_id", we can get all the leagues for that user via <code>GET https://api.sleeper.app/v1/user/?user_id/leagues/?sport/?season</code>.

```JSON
[
  {
    "total_rosters": 12,
    "status": "pre_draft", // can also be "drafting", "in_season", or "complete"
    "sport": "nfl",
    "settings": { settings object },
    "season_type": "regular",
    "season": "2018",
    "scoring_settings": { scoring_settings object },
    "roster_positions": [ roster positions array ],
    "previous_league_id": "198946952535085056",
    "name": "Sleeperbot Friends League",
    "league_id": "289646328504385536",
    "draft_id": "289646328508579840",
    "avatar": "efaefa889ae24046a53265a3c71b8b64"
  },
  {
    "total_rosters": 12,
    "status": "in_season",
    "sport": "nfl",
    "settings": { settings object },
    "season_type": "regular",
    "season": "2018",
    "scoring_settings": { scoring_settings object },
    "roster_positions": [ roster positions array ],
    "previous_league_id": "198946952535085056",
    "name": "Sleeperbot Dynasty",
    "league_id": "289646328504385536",
    "draft_id": "289646328508579840",
    "avatar": "efaefa889ae24046a53265a3c71b8b64"
  },
]
```

This gives us "league_id". Once we have "league_id", we can access all the league rosters, users, matchups, transactions, and draft information. For example, matchups can be retrieved via <code>GET https://api.sleeper.app/v1/league/!league_id/matchups/!week</code>.

```JSON
[
  {
    "starters": ["421", "4035", "3242", "2133", "2449", "4531", "2257", "788", "PHI"],
    "roster_id": 1,
    "players": ["1352", "1387", "2118", "2133", "2182", "223", "2319", "2449", "3208", "4035", "421", "4881", "4892", "788", "CLE"],
    "matchup_id": 2,
    "points": 20.0 // total points for team based on league settings
    "custom_points": null // if commissioner overrides points manually
  },
  ...
]
```
Two teams with the same matchup ID will be the teams facing each other.

You'll also notice that players are represented by a number. In order to get a player's info such as name, team, etc., we need to fetch a list of all the players. According to the documentation, this is a large file that should be updated no more than once per day due to it's size and the fact that it won't change very often. All the players will be fetched via <code>GET https://api.sleeper.app/v1/players/nfl</code>.

All stats and projections will be retrieved via <code>GET https://api.sleeper.app/v1/?stats/?nfl/?season-type/?season/?week</code> and <code>GET https://api.sleeper.app/v1/?projections/?nfl/?season-type/?season/?week</code>. For example:

```JSON
{
    "8465": {
        "tm_st_snp": 22.0,
        "tm_off_snp": 68.0,
        "tm_def_snp": 58.0,
        "st_snp": 2.0,
        "penalty_yd": 5.0,
        "penalty": 1.0,
        "off_snp": 68.0,
        "gs": 1.0,
        "gp": 1.0,
        "gms_active": 1.0
    },
    "6177": {
        "tm_st_snp": 20.0,
        "tm_off_snp": 70.0,
        "tm_def_snp": 57.0,
        "idp_tkl_solo": 1.0,
        "idp_tkl_ast": 1.0,
        "idp_tkl": 2.0,
        "gp": 1.0,
        "gms_active": 1.0,
        "def_snp": 16.0
    }, ...
```

## Component Hierarchy
For the Sidebar, InfoHeader, and PageHeader:

![Sidebar, InfoHeader, PageHeader Component Hierarchy](https://github.com/siemenjm/frontend-sleeper-sheets/blob/1352447957791c3521203682c19a0416b30ca388/proposal_screenshots/component_hierarchy1.png)

For the Pages:

![Pages Component Hierarchy](https://github.com/siemenjm/frontend-sleeper-sheets/blob/1352447957791c3521203682c19a0416b30ca388/proposal_screenshots/component_hierarchy2.png)


## Stretch Goals
The biggest stretch goal that I would like to achieve is adding CRUD functionality to the app in an "Advanced Fantasy Tools" section. This would give a user the ability to manipulate their lineups, look for trade opportunities, and other data manipulation features.

Other stretch goals would include:
* mobile responsiveness
* user auth
* advanced styling