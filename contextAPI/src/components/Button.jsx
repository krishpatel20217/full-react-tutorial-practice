import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {
    const [theme,changetheme]=useContext(ThemeDataContext);
console.log(theme);

    const changethemee = () =>{
        changetheme('dark')
    }
  return (
    <div>
      <button onClick={
        changethemee
      }>change theme</button>
    </div>
  )
}

export default Button
