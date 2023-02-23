//import { useState , useEffect } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { _userapiurl } from '../ApiUrl';
import { Navigate , useParams } from 'react-router-dom';

function Verifyuser()
{
    const params = useParams();

    useEffect(()=>{
        var updateDetails={"condition":{"email":params.email},"set":{"status":1}};
        axios.patch(_userapiurl+"update",updateDetails).then((result)=>{
            console.log("User verified successfully....");
            console.log(result);            
        });
     },[]);


    return(
    <div>
        <Navigate to='/' />
    </div>
    );
}

export default Verifyuser;
