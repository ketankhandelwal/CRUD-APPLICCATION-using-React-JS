import React , {createContext , useReducer} from "react";
import appReducer from "./appReducer";

const initialState = {
    users : [
       
    ]
};

export const context = createContext(initialState);


export const GlobalProvider = ({children}) => {

    const [state , dispatch] = useReducer( appReducer , initialState);
    
    const removeUser = (id) => {
        dispatch ({
            type : "REMOVEUSER",
            payload : id 
    })
    }

    const addUser = (user) => {
        dispatch ( {
            type : "ADDUSER",
            payload : user
        } )
    }

    const editUser = (user) => {
        dispatch ({
            type : "EDITUSER",
            payload : user
        })
    }

return (
    <context.Provider value = {{        
        users : state.users,
        removeUser : removeUser,
        addUser : addUser,
        editUser : editUser,
    }}>
        {children}
    </context.Provider>
)

}