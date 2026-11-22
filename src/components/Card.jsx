import { useContext } from "react"
import Button from "./ui/Button"
import { TaskContext } from "../context/TaskContext"
import { useNavigate } from "react-router-dom"

function Card({ data }) {
    const navigate = useNavigate();
   const {deleteTask} = useContext(TaskContext)
    function handleDelete() {
        deleteTask(data.id);
    }

    return (
        <article className="bg-zinc-200 p-4 rounded-md flex flex-col gap-1">
            <p className="text-xs text-red-900">{data.priority}</p>
            <h2 className="font-semibold text-xl">{data.tittle}</h2>
            <p className="text-sm">{data.description}</p>
            <p className="text-xs bg-green-300 w-fit font-semibold px-4 py-1 rounded-4xl">{data.status}</p>
            <div className="grid grid-cols-2 gap-3 mt-4">
                <Button type="button" text="Delete" onClick={handleDelete} />
                <Button type="button" text="Edit" onClick={()=>navigate('/edit-task', {state : data})} />
            </div>
        </article>

    )
}

export default Card