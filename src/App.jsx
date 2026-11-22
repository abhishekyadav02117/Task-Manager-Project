import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddTask from "./pages/AddTask";
import AllTask from "./pages/AllTask";
import EditTask from "./pages/EditTask";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add-task"
          element={
            <ProtectedRoute>
              <AddTask />
            </ProtectedRoute>
          }
        />
        <Route
          path="/all-task"
          element={
            <ProtectedRoute>
              <AllTask />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-task"
          element={
            <ProtectedRoute>
              <EditTask />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;