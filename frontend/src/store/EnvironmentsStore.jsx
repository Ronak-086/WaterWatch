import axios from "axios";
import { createContext, useState } from "react"

export const EnvironmentStore=createContext({});
export const EnvironmentContextProvider=({children})=>{
    const [currEnvironments,setCurrenvironments]=useState([]);
    const getEnvironments=async()=>{
        try{
            const response=await axios.get("/api/environment/getEnvironments/68452e3a837ff10bf4c35b0f");
            setCurrenvironments(response.data.environments);
        }catch(err){
            console.log(err);
        }
    }
    return <EnvironmentStore.Provider value={{getEnvironments,currEnvironments}}>
        {children}
    </EnvironmentStore.Provider>
}