import React, { useContext } from 'react'
import Nav2 from './Nav2'
// import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
 
  // console.log(props.children);
//  const data = useContext(ThemeDataContext)
  
  return (
    <div className='nav'>
      {/* {data} */}
      <Nav2 />
    </div>
  )
}

export default Navbar
