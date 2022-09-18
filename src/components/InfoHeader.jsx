import Avatar from "./Avatar";

export default function InfoHeader({league}) {
    return (
        <>
            <div className="info-header">
                <Avatar avatar={league.avatar} type='league'/>
                <p className="league-name">Name: {league.name}</p>
            </div>
        </>
    );
}