import React, { useState } from 'react'

const App = () => {
  // hooks implementation 
  // const [age,setage] = useState(0)
  
  const [intern, setintern] = useState({name:"krish", age:20});
  const [arr,setarr]=useState([1,2,3,4,5,6]);

  function change(){
    // setage(age+1);
  //  const newsetintern = {...intern};
  //  console.log(newsetintern);
  //  newsetintern.name="abc";
  //  newsetintern.age=21;
   setintern(prev=>({...prev,age:50}));
  //  setintern(newsetintern);
   
    
  }
  const changearr = ()=>{
const newsetarr = [...arr];
newsetarr.push(99);
// we can also write  setarr([...arr, 99]);
setarr(newsetarr);
  }
  return (
    <div>
      <p>name is {intern.name} , my age is {intern.age}</p>
      <button onClick={change}>click </button>
      <p>arr is {arr}</p>
      <button onClick={changearr}>click</button>
    </div>
  )
}

export default App
