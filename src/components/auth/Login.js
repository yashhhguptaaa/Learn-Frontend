import React ,{useState , useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

export default function Login() {

    const [ email ,setEmail] = useState("");
    const [ password ,setPassword] = useState("");
    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();

    async function login(e){
        e.preventDefault();
        

        try{
            const loginData = { email , password};

            await axios.post('http://localhost:5000/auth/login',loginData);
            getLoggedIn();
            history.push("/");
        }catch(err){
            console.error(err);
        }
    }

    return (
        <div>
            <h2>Login to your account</h2>
            <form onSubmit={login}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
