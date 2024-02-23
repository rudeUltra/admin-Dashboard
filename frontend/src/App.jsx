import Navbar from './components/login'
import DashBoard from './components/dashboard'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function getToken(){
  const storedData = localStorage.getItem('token');
  if (storedData) {
    return true;
  } else {
    return false; //goTemmm
  }
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Navbar/></div>,
  },
  {
    path:"/admin",
    loader:getToken,
    element:<div><DashBoard/></div>
  }
])

function App() {
  //Big brain way to set up router gaining easy state management siu

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
