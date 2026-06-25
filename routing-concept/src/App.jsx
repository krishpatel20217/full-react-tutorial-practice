import React from 'react'
import { Route,Router, Routes,Link } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Notfound from '../pages/Notfound'
import Mens from '../pages/Mens'
import Courses from '../pages/Courses'
import Coursedetails from '../pages/Coursedetails'
const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>} > 
        <Route path='men' element={<Mens/>}/>
        </Route>
        <Route path='*' element={<Notfound/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<Coursedetails/>}/>
      </Routes>
    </div>
  )
}

export default App
// useNavigate()