export default function Avatar({avatar, type}) { 
    if (!avatar) {
        return(
            <img className="avatar" src={'https://picsum.photos/50'} alt={`${type} avatar`}/>
        );
    }

    return ( 
        <img className="avatar" src={`https://sleepercdn.com/avatars/thumbs/${avatar}`} alt={`${type} avatar`}/>
    );
}