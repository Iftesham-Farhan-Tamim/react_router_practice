import './App.css'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import About from './components/About.jsx'
import User from './components/User.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <><Navbar /><Home /></>
  //   },
  //   {
  //     path: "/login",
  //     element: <><Navbar /><Login /></>
  //   },
  //   {
  //     path: "/about",
  //     element: <><Navbar /><About /></>
  //   },
  //   {
  //     path: "/user",
  //     // path: "/user/:username",
  //     element: <><Navbar /><User /></>
  //   },
  // ])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        {/* <Route path='user/:userid' element={<User />} /> */}
        <Route path='user' element={<User />} />
        {/* <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github />}
         /> */}
      </Route>
    )
  )



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App