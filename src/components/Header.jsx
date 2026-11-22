import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import Button from "./ui/Button";

function Header() {
  let { user, setUser } = useContext(AuthContext);
  function handleClick() {
    setUser(null)
  }
  return (
    <div className="px-5 py-3 flex items-center justify-between border-b black">
      <h1 className="font-semibold">TASK MANAGER</h1>

      {
        user && (
          <nav className="flex gap-2 items-center">
            <Link to='/'>Home</Link>
            <Link to='/all-task'>All Task</Link>
            <Link to='/add-task'>Add Task</Link>
            <Button type="button" text="Logout" onClick={handleClick}/>
          </nav>
        )
      }

      {
        !user && (
          <Link to='/login' className="px-4 py-2 rounded-2xl bg-blue-600 text-white font-semibold">Login</Link>

        )
      }

    </div>
  )
}

export default Header