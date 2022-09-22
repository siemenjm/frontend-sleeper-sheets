import { Context } from "context/Context";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

export default function LoadingPage(props) {
    const navigate = useNavigate();
    const { currentUser, sleeperUser, getSleeperUser } = useContext(Context);

    useEffect(() => {
        getSleeperUser(currentUser.sleeperName);
    },[]);

    if (!sleeperUser) {
        return <h2>Loading data...</h2>
    }

    navigate(`/user/${sleeperUser.user_id}/league/012345/`, { replace: true }); // need to change route

    return (
        <>
        </>
    );
}