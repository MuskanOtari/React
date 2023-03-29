import React from 'react'

const inlineComp={
  color: 'blue', 
}
function FunctionCompo() {
  return (
  <div className="combinedDiv">
      <div className='boxF'>
    <h2>This is created using Function Components</h2>
    <p>This is Done by using External CSS</p>
    <p style={inlineComp}>This is Done by using Inline CSS</p>
    </div>
  </div>
  )
}

export default FunctionCompo
