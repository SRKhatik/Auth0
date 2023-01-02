import { useAuth0 } from "@auth0/auth0-react";
import React from "react"

function Logout(){

    const {logout} = useAuth0()

    return(
        <button onClick={() => logout()}>LogOut</button>
    )
}
export default Logout; 