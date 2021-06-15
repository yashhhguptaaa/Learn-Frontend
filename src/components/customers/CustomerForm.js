import React , {useState} from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default function CustomerForm({getCustomers}) {

    const [customerName , setCustomerName ] = useState("");
    const history = useHistory();

    async function saveCustomer(e){
        e.preventDefault();

        try{
            const customerData = { name:customerName};
            await axios.post('http://localhost:5000/customer',customerData);
            getCustomers();
            
        }
        catch(err){
            console.error(err);
        }
    }

    return (
        <div>
            <form onSubmit={saveCustomer}>
                <input type="string" placeholder="Customer Name here" value={customerName} onChange={(e) => setCustomerName(e.target.value)}/>
                <button type="submit" >Save new customer</button>
            </form>
        </div>
    )
}
