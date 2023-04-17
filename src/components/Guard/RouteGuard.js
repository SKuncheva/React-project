import { UserAuthenticate } from "../../context/context";
import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

export const Guard=({children})=>{
    const {authenticate}=useContext(UserAuthenticate);
    if(authenticate.accessToken===undefined){
        return <Navigate to='/login'/>
    }
    return children ? children : <Outlet/>
}