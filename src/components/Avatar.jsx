export default function Avatar({avatar, type}) { 
    if (!avatar) {
        return(
            <img className="avatar" src={'https://sleepercdn.com/images/v2/icons/league/nfl/lilac.png'} alt={`${type} avatar`}/>
        );
    }

    return ( 
        <img className="avatar" src={`https://sleepercdn.com/avatars/thumbs/${avatar}`} alt={`${type} avatar`}/>
    );
}