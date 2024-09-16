import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../aplication/contexts/AuthContext';

function GuardRoute({children}) {
    const location = useLocation();
    const navigate = useNavigate();
    const { auth, role } = useContext(AuthContext);
    const publicRoutes = ["/", "/register"]
    useEffect(()=>{
        if(!!auth){
            if(location.pathname === "/"){
                navigate("/dashboard")
            }
        }else{
            if(!publicRoutes.includes(location.pathname)){
                navigate("/")
            }else{
                navigate("/dashboard")
            }
        }
    },[location.pathname])
  return (
    <>{children}</>
  )
}

export default GuardRoute