import React, { useState } from 'react'

const App = () => {

 const [title , setTitle] = useState(''); 
  const onsubmitfxn = (e) => {
    e.preventDefault();
    console.log("clicked by "+ title);

    setTitle('');
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        onsubmitfxn(e);
      }}>
        <input type="text" placeholder='enter your name' 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
          
        }}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
