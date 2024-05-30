import { getUserName } from "../services/auth.service";
import { useEffect, useState } from "react";

export const useLogin=() =>{

    const [username, setUsername] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            setUsername(getUserName(token));
        }else{
            window.location.href = "/login";
        
        }
        setUsername(getUserName(token));
     }, []);

     return username;

}

