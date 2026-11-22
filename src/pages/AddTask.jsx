import { useForm } from "react-hook-form"
import Header from "../components/Header"
import Input from "../components/ui/Input"
import Button from "../components/ui/Button"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"
import { useNavigate } from "react-router-dom"

function AddTask() {
const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
   const {addTask} = useContext(TaskContext)

    function handleData(data){
        console.log(data);
        addTask(data);
        navigate("/all-task");
    }

   

  return (
    <div>
        <Header/>

        <form onSubmit={handleSubmit(handleData)} className="max-w-md mx-auto h-screen flex flex-col gap-2 justify-center">
            <Input label={'tittle'} type="text" placeholder="Task Tittle" register={register}/>
            <Input label={'description'} type="text" placeholder="Task Description" register={register}/>
            <label className="font-semibold capitalize">task status</label>
            <select {...register('status')} className="px-3 py-2 border border-grey-300 rounded">
                <option>Task Status</option>
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
            </select>
            <label className="font-semibold capitalize">task priority</label>
            <select {...register('priority')} className="px-3 py-2 border border-grey-300 rounded">
                <option>Task Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <Button type="submit" text="Add Task"/>
        </form>
    </div>
  )
}

export default AddTask