import './App.css'
import InputNote from './components/InputNote'
import DisplayNotes from './components/DisplayNotes'
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import ViewNote from './components/ViewNote'
import AboutUs from './components/AboutUs'
import Login from './components/Login'
import Signup from './components/Signup'
import ProtectedRoutes from './components/ProtectedRoutes'


const router = createBrowserRouter(
  [
    
    {
      path:"/signup",
      element: <div><NavigationBar /> <Signup /> </div>
    },
    {
      path:"/login",
      element: <div><NavigationBar /> <Login /> </div>
    },
    {
      path:"/",
      element: <ProtectedRoutes><NavigationBar /> <InputNote /> </ProtectedRoutes>
    },
    {
      path:"/notes",
      element: <ProtectedRoutes><NavigationBar /> <DisplayNotes /> </ProtectedRoutes>
    },
    {
      path:"/notes/:id",
      element: <div><NavigationBar /> <ViewNote /> </div>
    },
    {
      path:"/about-us",
      element: <div><NavigationBar /> <AboutUs /> </div>
    }
  ]
)

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
