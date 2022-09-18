import DefaultPage from "pages/DefaultPage";
import LeaguePage from "pages/LeaguePage";
import { Route, Routes } from "react-router";

export default function Main({BASE_URL, user}) { 
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<DefaultPage />} />
                <Route path="/league/:id" element={<LeaguePage BASE_URL={BASE_URL} user={user}/>} />
            </Routes>
        </main>
    );
}