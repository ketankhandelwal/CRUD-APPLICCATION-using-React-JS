
import AddUser from "../components/AddUser"

export default (state ,  action) => {

    switch (action.type) {
        case "REMOVEUSER" : 
            return { users : state.users.filter(user => {

                return user.id !== action.payload

            })
        }

        case "ADDUSER":
            return {
                users : [action.payload , ...state.users] // have all the previous data // spread operator..
            }
        case "EDITUSER":
            const updateUser = action.payload 
            
            const updateUsers = state.users.map(user => {
                if(user.id === updateUser.id) {
                    
                    return updateUser
                }

                return user
            })

            return {
                users : updateUsers
            }
        
    
        default:
            return state
    }

}