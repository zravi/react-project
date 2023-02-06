import { Navigate } from 'react-router-dom';
import { useState , useEffect } from 'react'; 

function Auth()
{
    const [ status , setStatus ] = useState(0);	

    useEffect(()=>{
     var path=window.location.pathname;
     if(path!="/" && path!="/about" && path!="/contact" && path!="/service" && path!="/register" && path!="/login")
     {
      if(localStorage.getItem('role')==undefined)
        setStatus(1);
     }
    },[]);
    

    return(
        <div>
            {status == 1 &&
                <Navigate to='/login' />
            }
        </div>
    )
}

export default Auth
