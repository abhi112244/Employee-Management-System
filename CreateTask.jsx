import { useContext, useState } from "react"

import { AuthContext } from "../../context/AuthProvider"

const CreateTask =()=>{

    const [userData,setUserData]= useContext(AuthContext)
  
   const[taskTitle,setTaskTitle] = useState("")
   const[taskDescription,setTaskDescription] = useState("")
   const[taskDate,setTaskDate] = useState("")
   const[asignTo,setAsignTo] = useState("")
   const[category,setCategory] = useState("")

    const[Task,setTask] = useState({})

    const submitHandler =(e)=>{
        e.preventDefault()
         
        setTask({taskTitle,taskDate,taskDescription,category,active:false,newTask:true,failed:false,completed:false})
         const data = userData
        
         
         
         if (data && Array.isArray(data.employee)) {
         data.employees.forEach(function (elem){
            if(asignTo == elem.firstName){
                if (!elem.tasks) elem.tasks = [];
                elem.tasks.push(Task)
                elem.taskNumbers.newTask=elem.taskNumbers.newTask+1
            
             }
         })
        }
        setUserData(data)
         console.log(data);
         //localStorage.setItem("employees",JSON.stringify(data))
         setTaskTitle("")
         setTaskDate("")
         setAsignTo("")
         setCategory("")
         setTaskDescription("")
        
    }

    return (
      <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} 
            className="flex flex-wrap w-full  items-start justify-between">
                 
                 <div className="w-1/2">
                    <div>
                               <h3 className="text-sm text-gray-300 mb-0.5 text-white">Task Title</h3>
                <input 
                value={taskTitle}
                onChange={(e)=>{
                    setTaskTitle(e.target.value)
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-white " type="text"  placeholder="make a ui design"/>
                 </div>
                        <div>
                 <h3 className="text-sm text-gray-300 mb-0.5 text-white">Date</h3>
                <input 
                  value={taskDate}
                onChange={(e)=>{
                    setTaskDate(e.target.value)
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent text-white border-[1px] border-gray-400 mb-4 p" type="date" placeholder="white"/>
               </div>
                <div>
                    <h3 className="text-sm text-gray-300 mb-0.5  text-white">asign to</h3>
                <input 
                  value={asignTo}
                onChange={(e)=>{
                    setAsignTo(e.target.value)
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] text-white border-gray-400 mb-4" type="text" placeholder="employe name"/>
                </div>
               <div>
                 <h3 className="text-sm text-gray-300 mb-0.5  text-white">Category</h3>
                <input
                  value={category}
                onChange={(e)=>{
                    setCategory(e.target.value)
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] text-white border-gray-400 mb-4" type="text" placeholder="design, dev,etc"/>
               </div>
                    </div>
                     
                 <div className="w-1/2 flex flex-col items-start">
                        <h3 className="text-sm text-gray-300 mb-0.5  text-white">Description</h3>
                <textarea
                  value={taskDescription}
                onChange={(e)=>{
                    setTaskDescription(e.target.value)
                }}
                className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] text-white border-gray-400"name="" id="" cols="30" rows={10}></textarea>
                 </div>
               
                <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full text-white">Create Task</button>
            </form>
        </div>
    )
}
export default CreateTask