import React from 'react'
const inlineComp={
  color: 'blue', 
}
function ClassCompo() {
  return (
  <div>
    <div className='boxC'> 
    <h2>This is created using Class Components</h2>
    <p>This is Done by using External CSS</p>
    <p style={inlineComp}>This is Done by using Inline CSS</p>
   </div>
  </div>
  )
}

export default ClassCompo
