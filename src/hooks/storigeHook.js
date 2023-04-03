import { useState } from "react";

export const useStorige=(key,values)=>{
    const [value, setVelues]=useState(()=>{
        const storeInfo=localStorage.getItem(key);
        return storeInfo ? JSON.parse(storeInfo): values;
    });

    const putOnStateValues=(data)=>{
        localStorage.setItem(key, JSON.stringify(data));
        setVelues(data)
    }
    return[
        value,
        putOnStateValues
    ]
}