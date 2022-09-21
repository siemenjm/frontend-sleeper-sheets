import Avatar from "./Avatar";

export default function InfoHeader({league}) {
    return (
        <>
            <div className="info-header">
                <Avatar avatar={league.avatar} type='league'/>
                <h2 className="league-name">{league.name}</h2>
            </div>
        </>
    );
}