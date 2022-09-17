import Avatar from "./Avatar";

export default function League({handleClick, league}) {
    return ( 
        <div onClick={handleClick} value={league} className="league">
            <Avatar avatar={league.avatar} type='league'/>
            <p className="league-name">Name: {league.name}</p>
        </div>
    );
}