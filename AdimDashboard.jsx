import AllTask from "../other/AllTask"
import CreateTask from "../other/CreateTask"
import Header from "../other/Header"

const AdimDashboard = (props)=>{
    return (
        <div className="h-screen w-full p-7"> 
    
         <Header changeUser ={props.changeUser}  />
         <CreateTask />
         <AllTask />
        
       
         

        </div>
    )
}
export default AdimDashboard