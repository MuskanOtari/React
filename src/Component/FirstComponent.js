import React from 'react'
import { useState } from 'react';

import FunctionCompo from './FunctionCompo';
import ClassCompo from './ClassCompo';
function FirstComponent() {
  var a=10;
  const [firstButton, setFirt_Button]=useState(false);
  const [secondButton,setSecond_Button ]=useState(false);
  
  const handleFunction_One=()=>{
    console.log(firstButton);
    setFirt_Button(!firstButton);
  }
  const handleFunction_Two=()=>{
    console.log(secondButton);
    setSecond_Button(!secondButton);
  }
  return (
    <>
    <button onClick={handleFunction_One}>To see styling in Function Component</button>
    <button onClick={handleFunction_Two}>To see styling in Class Component</button>
    
    {/* {count && <FunctionCompo/>} */}

    {firstButton ? <FunctionCompo/>:null}
    {secondButton ? <ClassCompo/>:null}

    {/* <ClassCompo/> */}
    </>
  );
}

export default FirstComponent;
 
