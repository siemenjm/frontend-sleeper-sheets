export default function League({league}) { 
    return ( 
        <div className="league">
            <p className="league-avatar">Avatar: {league.avatar}</p>
            <p className="league-name">Name: {league.name}</p>
        </div>
    );
}