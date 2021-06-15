import axios from 'axios';
import React , { createContext , useEffect , useState } from 'react';


const AuthContext = createContext();

function AuthContextProvider({children}) {

    const [ loggedIn , setLoggedIn] = useState(undefined);
    

    async function getLoggedIn () {
        const loggedInRes = await axios.get('https://mern-auth-template1.herokuapp.com/auth/loggedIn');
        await setLoggedIn(loggedInRes.data);
        
    } 

    useEffect(() => {
        getLoggedIn();
    }, [])
    return (
        <AuthContext.Provider value={{
            loggedIn , getLoggedIn,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export  {AuthContext , AuthContextProvider};
