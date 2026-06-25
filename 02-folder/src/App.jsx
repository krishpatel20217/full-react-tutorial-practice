import React from 'react'
import Card from './components/Card'

const arr=[{
  name:"krish",
  age:20
},{
  name:"ved",
  age:23
},{
  name:"kuldeep",
  age:24
}]


const App = () => {
  function inputclicked(val){
  console.log(val);
  
}
  return (
    <div >
      
        {arr.map(function(elem,idx){

          return <div key={idx}>
            < Card  val={elem.name} age={elem.age}/>
          </div>
          
          
        })}

        <div>
          <input onChange={function(elem) {
            inputclicked(elem.target.value)
          }} type="text" className='inpt' placeholder='type something'/>
        </div>
        
      
    </div>
  )
}

export default App
