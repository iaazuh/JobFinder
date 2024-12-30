import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom"
import Homepage from "./Pages/Homepage"
import MainLayout from "./Layouts/MainLayout"
import JobsPage from "./Pages/JobsPage"
import JobPage from "./Pages/JobPage"
import AddJobPage from "./Pages/AddJobPage"


const router = createBrowserRouter(
  createRoutesFromElements (
  <Route path="/" element={<MainLayout/>}>
    <Route index element={<Homepage />} />
    <Route path="/jobs" element={<JobsPage />} />
    <Route path="/jobs/:id" element={<JobPage />} />
    <Route path="/add-job" element={<AddJobPage />} />
  </Route> 
  
)
)

const App = () => {
  return (

     <RouterProvider router={router} />
    
  )
}

export default App