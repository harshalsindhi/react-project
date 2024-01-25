import styled from "styled-components";
import dice1 from "./img/dice_1.png";
import dice2 from "./img/dice_2.png";
import dice3 from "./img/dice_3.png";
import dice4 from "./img/dice_4.png";
import dice5 from "./img/dice_5.png";
import dice6 from "./img/dice_6.png";
import { useState } from "react";

const Rolldice = ({dicenum,setDicenum,calScore}) => {
    const[dicenumber,setDicenumber]=useState(dice1);
    
    function randomNumber(min, max) {
        // console.log(Math.random() * (max - min) + min);
        let num=Math.round(Math.random() * (max - min) + min);
         setDicenum(num);
         
        
         switch(dicenum){
            case 1:
               setDicenumber(dice1); 
            //    setDicenum(1);
            
            break;
            case 2:
                setDicenumber(dice2); 
                // setDicenum(2);
            break;
            case 3:
                setDicenumber(dice3);
                // setDicenum(3); 
            break;
            case 4:
                setDicenumber(dice4); 
                // setDicenum(4);
            break;
            case 5:
                setDicenumber(dice5); 
                // setDicenum(5);
            break;
            case 6:
                setDicenumber(dice6); 
                // setDicenum(6);
            break;
        }
        console.log("randmon number is "+num);
        console.log("dicenum to set in state is "+dicenum);
        console.log("image is "+dicenumber);

        calScore();
    }
  return (
    <DiceContainer className="dice">
    <div>
        <img src={dicenumber} alt="Dice Images" className="img" onClick={()=>{randomNumber(1,6)}}/>
    </div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default Rolldice;
const DiceContainer=styled.div`
display:flex;
flex-direction: column;
align-items: center;;
margin-top:45px;
.dice{
    .img{
        width:200px;
        height:200px;
    }
}
p{
    font-size:22px;
    font-weight:400;
}
`;
