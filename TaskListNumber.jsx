const TaskListNumber = ({data})=>{
    return (
        <div className="flex mt-10 justify-between gap-7 screen" >
        <div className="rounded-xl px-9 py-6 w-[45%] bg-red-400">
            <h2 className="text-2xl font-semibold">{data.taskNumbers.newTask}</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>
         <div className="rounded-xl px-9 py-6 w-[45%] bg-blue-400">
            <h2 className="text-2xl font-semibold">{data.taskNumbers.completed}</h2>
            <h3 className="text-xl font-medium">completed Task</h3>
        </div>
         <div className="rounded-xl px-9 py-6 w-[45%] bg-green-400">
            <h2 className="text-2xl font-semibold">{data.taskNumbers.active}</h2>
            <h3 className="text-xl font-medium">Accepted Task</h3>
        </div>
         <div className="rounded-xl px-9 py-6 w-[45%] bg-yellow-400">
            <h2 className="text-2xl font-semibold">{data.taskNumbers.failed}</h2>
            <h3 className="text-xl font-medium">failed Task</h3>
        </div>
        </div>
    )
}
export default TaskListNumber