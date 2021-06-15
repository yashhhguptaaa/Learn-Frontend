import axios from 'axios';
import React , { createContext , useEffect , useState } from 'react';


const AuthContext = createContext();

function AuthContextProvider({children}) {

    const [ loggedIn , setLoggedIn] = useState(undefined);
    

    async function getLoggedIn () {
        const loggedInRes = await axios.get('http://localhost:5000/auth/loggedIn');
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
