import { useContext, useEffect } from "react";
import { context } from "../context/globalState";

export default function useCount(count){

    

    useEffect( () =>{
        if(count >= 1) {
            document.title = `USERS ${count}`;
        }

        else document.title = "USER"

    }, [count] )
}

