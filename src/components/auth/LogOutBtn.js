import axios from 'axios'
import React , { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

export default function LogOutBtn() {

    const { getLoggedIn } = useContext(AuthContext)
    const history = useHistory();

    async function logOut(){
        await axios.get("https://mern-auth-template1.herokuapp.com/auth/logout");
        await getLoggedIn();
        history.push("/");
    }

    return (
        <button onClick={logOut}>
            Log Out
        </button>
    )
}
