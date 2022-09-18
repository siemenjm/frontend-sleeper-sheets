import DefaultPage from "pages/DefaultPage";
import { Route, Routes } from "react-router";

export default function Main(props) { 
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<DefaultPage />}/>
            </Routes>
        </main>
    );
}