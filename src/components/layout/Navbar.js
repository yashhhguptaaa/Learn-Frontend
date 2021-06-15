import React , { useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import LogOutBtn from '../auth/LogOutBtn';


export default function Navbar() {

    const {loggedIn , setLoggedIn} = useContext(AuthContext);
        return (
        <div>
            <Link to="/">Home</Link>
            {
                loggedIn === false && ( <> 
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                </>)
            }
            {
                loggedIn === true && 
                <>
                <Link to="/customer">Customers</Link>
                <LogOutBtn />
                </>
            } 
             
            
            
        </div>
    )
}
