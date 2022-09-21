import Avatar from "./Avatar";

export default function InfoHeader({currentLeague}) {
    return (
        <>
            <div className="info-header">
                <Avatar avatar={currentLeague.avatar} type='league'/>
                <h2 className="league-name">{currentLeague.name}</h2>
            </div>
        </>
    );
}