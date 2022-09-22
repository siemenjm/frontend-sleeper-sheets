import './styles/main.css';
import Sidebar from "components/Sidebar";
import { useEffect, useState } from 'react';
import Main from 'components/Main';
import { Context } from 'context/Context';
import { setUserToken, clearUserToken, getUserToken } from './utils/authToken';
import decode from 'jwt-decode';

const BASE_URL = 'https://api.sleeper.app/v1/';
const DB_URL = 'http://localhost:4000';

export default function App() {
    // const [user, setUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [sleeperUser, setSleeperUser] = useState(null);
    const [league, setLeague] = useState(null);
    const [weeklyData, setWeeklyData] = useState({
        weeklyStats: null,
        WeeklyProj: null
    });

    async function getWeeklyStats() {
        const URL = `${BASE_URL}stats/nfl/regular/2022/2`;

        try {
            const response = await fetch(URL);
            const allWeeklyStats = await response.json();

            return allWeeklyStats;
        } catch(err) {
            console.log(err);
        }
    }

    async function getWeeklyProjs() {
        const URL = `${BASE_URL}projections/nfl/regular/2022/2`;

        try {
            const response = await fetch(URL);
            const allWeeklyProj = await response.json();

            return allWeeklyProj;
        } catch(err) {
            console.log(err);
        }
    }

    async function getWeeklyData() {
        const allWeeklyStats = await getWeeklyStats();
        const allWeeklyProj = await getWeeklyProjs();

        setWeeklyData({
            weeklyStats: allWeeklyStats,
            weeklyProj: allWeeklyProj
        });
    }

    // AUTHENTICATION --------------
    async function registerUser(data) {
        try {
            const configs = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json",
                },
            };

            const newUser = await fetch(
                "http://localhost:4000/auth/register",
                configs
            );

            const parsedUser = await newUser.json();
            console.log(parsedUser);

            setUserToken(parsedUser.token);
            setCurrentUser(parsedUser.currentUser);
            setIsAuthenticated(parsedUser.isLoggedIn);

            return parsedUser;    

        } catch(err) {
            console.log(err);
            clearUserToken();
            setIsAuthenticated(false);
            return false;
        }
    }

    async function loginUser(data) {
        try {
            const configs = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json",
                },
            };
            const response = await fetch("http://localhost:4000/auth/login", configs);
            const user = await response.json();
            console.log(user);
            

            setUserToken(user.token);
            setCurrentUser(user.user);
            setIsAuthenticated(user.isLoggedIn);

            return user;

        } catch(err) {
            clearUserToken();
            setCurrentUser(null);
            setIsAuthenticated(false);
            return false;
        }
    }

    async function getUser() {
        const token = getUserToken();
        try {
            if (token) {
                console.log(token)
                const user = decode(token);
                console.log(user);
                const response = await fetch(
                  `http://localhost:4000/auth/user/${user.id}`, {headers: {"Authorization":`bearer ${token}`}}
                );
                const foundUser = await response.json();
                console.log(foundUser);
                setCurrentUser(foundUser);
                setIsAuthenticated(true);
            } else {
                setCurrentUser(null);
                setIsAuthenticated(false);
            }
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        console.log('updating user info in App');
        getUser();
        getWeeklyData();
    }, [currentUser?._id]);

    function logoutUser() {
        console.log('clicked logout');
        clearUserToken();
        setCurrentUser(null);
        setIsAuthenticated(false);
        setSleeperUser(null);
        setLeague(null);
        setWeeklyData(null);
    }

    return (
        <>
            <Context.Provider value={{
                BASE_URL,
                DB_URL,
                currentUser,
                setCurrentUser,
                isAuthenticated,
                loginUser,
                registerUser,
                logoutUser,
                sleeperUser,
                setSleeperUser,
                league,
                setLeague,
                weeklyData }}>
                <Sidebar />
                <Main />
            </Context.Provider>
        </>
    );
}
