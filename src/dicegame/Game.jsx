// import React from 'react'
import styled from "styled-components";
import Left_nav from './Left_nav';
import Right_nav from './Right_nav';
import Rolldice from './Rolldice';
import { useState } from "react";

const Game = () => {
  const[dicenum,setDicenum]=useState(1);//selecetd number by system
  const[selectNumber,setSelectNumber]=useState(2);//selected number by user
  const [score,setScore]=useState(0);
  function calScore(){
    //console.log(dicenum+" "+selectNumber);
    if(dicenum==selectNumber){
       setScore(score+dicenum);
    }else{
      if(score-2 >=0){
        setScore(score-2);
      }else{
        setScore(0);
      }
    }
  }

  return (
    <Main>
      <Top_section>
        <Left_nav score={score}/>
        <Right_nav selectNumber={selectNumber} setSelectNumber={setSelectNumber}/>

        

      </Top_section>
      <Rolldice dicenum={dicenum} setDicenum={setDicenum} calScore={calScore}/>
      <div className="btns">
        <Button class="btn">Reset</Button>
        <Button>Show Result</Button>
        </div>   
    </Main>
  )
}

export default Game;
const Button=styled.button`
padding:10px 40px;
border-radius:10px;
background:black;
color:white;
text-align:center;
border:2px solid transparent;
font-size:16px;
transition:all .3s ease-in-out;
cursor: pointer;
&:hover{
    background:white;
    border:2px solid black;
    color:black;
    cursor:pointer;
}
margin:10px auto;
word-wrap:normal;
`;
const Top_section=styled.div`
    width:100vw;
    display:flex;
    justify-content: space-around;
    padding-top:40px;
    
    /* background:red; */
`;
const Main=styled.main`
  .btns{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 150px;;
    margin-left:550px;
   
  }
`

