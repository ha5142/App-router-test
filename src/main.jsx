import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Harsh from './components/Harsh/Harsh.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/', // its show main landing page 
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       }, 
//       {
//         path: 'about',
//         element: <About/>  // here is which elmnet to render to page
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

//anotehr alternative options

const router = createBrowserRouter(
  createRoutesFromElements(
    //nesting in route
    <Route path='/' element={<Layout/>}>
      <Route path='/home'element={<Home/>}/>
      
      <Route path='/about' element={<About/>}>
      <Route path='harsh'element={<Harsh />}/>
      </Route>
      
       
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/user/:userid' element={<User/>}/>
      
      <Route 
      loader={githubInfoLoader}
      path='/github' 
         element={<Github/>}/>
         
      
    </Route>
    
    
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>

     <RouterProvider router={router} />  

  </StrictMode>,
)
