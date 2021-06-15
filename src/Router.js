import React , {useContext} from 'react'
import { BrowserRouter,Switch , Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { AuthContext } from './context/AuthContext';
import Customers from './components/customers/Customers';

export default function Router() {

    const { loggedIn} = useContext(AuthContext);
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <div>Home</div>
                </Route>
                <Route exact path="/register">
                   { loggedIn === false && <Register />} 
                </Route>
                <Route exact path="/login">
                { loggedIn === false && <Login /> }
                </Route>
                <Route exact path="/customer">
                { loggedIn === true && <Customers />}
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
