import { Context } from "context/Context";
import { useContext } from "react";

export default function IRPositions(props) {
    const { currentLeague } = useContext(Context);

    const IRSlots = currentLeague.settings.reserve_slots;
    
    const IRPositions = [];
    for (let i = 0; i < IRSlots; i++) {
        const position = <div className="position-label" key={i}><h3 className={`IR-label`}>IR</h3></div>;
        IRPositions.push(position);
    }

    return (
        <div className="IR-positions">
            {IRPositions}
        </div>
    );
}