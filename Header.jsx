//import { useState } from "react"

import { setLocalStorage } from "../../utils/localStorage"


const Header = (props)=>{
    // const [username, setUsername] = useState("")
    // if(!data){
    //     setUsername("admin")
    // }else{
    //     setUsername(data.firstName)
    // }

    const logOutUser =()=>{
        localStorage.setItem("loggedInUser","")
          props.changeUser()
    }

    return (
        <div className="flex items-end justify-between">
            <h1 className="text-2xl font-medium text-white"> hello <br /><span className="text-3xl font-semibold">{props.firstName || "User"}</span></h1>
            <button onClick={logOutUser} className="bg-red-600 text-lg fornt-medium text-white px-5 gap-5 py-2 rounded">Log Out</button>
          
        </div>
    )
}
export default Header