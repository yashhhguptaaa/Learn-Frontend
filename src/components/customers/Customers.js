import axios from 'axios';
import React , {useState , useEffect} from 'react'
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';

export default function Customers() {

    const [customers , setCustomers] = useState([]);

    async function getCustomers(){
        const customersRes = await axios.get('https://mern-auth-template1.herokuapp.com/customer');
        setCustomers(customersRes.data);
    }

    useEffect(() => {
        getCustomers();
        
    },[])


    return (
        <div>
            <CustomerForm getCustomers={getCustomers}/>
            <CustomerList customers={customers} />
        </div>
    )
}
