import React ,{useState, useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
export default function Register() {

    const [ email ,setEmail] = useState("");
    const [ password ,setPassword] = useState("");
    const [ passwordVerify ,setPasswordVerify] = useState("");
    const { getLoggedIn } = useContext(AuthContext)
    const history = useHistory();

    async function register(e){
        e.preventDefault();

        try{
            const registerData = { email , password , passwordVerify };

            await axios.post('https://mern-auth-template1.herokuapp.com/auth/',registerData);
            getLoggedIn();
            history.push("/");
        }catch(err){
            console.error(err);
        }
    }

    return (
        <div>
            <h2>Register  a new user</h2>
            <form onSubmit={register}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Re-type your Password" value={passwordVerify} onChange={(e) => setPasswordVerify(e.target.value)}/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
