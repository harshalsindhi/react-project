import React from 'react';
import { useState } from 'react'

import Home from './dicegame/Home';
import Game from './dicegame/Game';

function App() {
  const [flag,setFlag]=useState(true);
  function reverseState(){
    if(flag==true){
      setFlag(false);
    }else{
      setFlag(true);
    }
  }
  
  return (
    <>
   {flag ? <Game/>:<Home reverseState={reverseState}/>}
    </>
  )
}

export default App
