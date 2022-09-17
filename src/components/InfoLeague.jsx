import Avatar from "./Avatar";

export default function InfoLeague({league}) {
    return ( 
        <div className="league">
            <Avatar avatar={league.avatar} type='league'/>
            <p className="league-name">Name: {league.name}</p>
        </div>
    );
}