import React from 'react'
import styled from 'styled-components';

const Left_nav = ({score,setScore}) => {
  return (
    <Left className="left">
            <div className="score">{score}</div>
            <p>total score</p>
        </Left>
  )
}

export default Left_nav;

const Left=styled.div`
/* background-color: red; */
position:relative;
bottom:20px;
right:100px;
    div{
color: #000;

font-family: Poppins;
font-size: 70px;
font-style: normal;
font-weight: 500;
line-height: normal;
font-family: 'Poppins', sans-serif;
line-height:70px;
display: grid;
place-items: center;
padding-left:10px;

    } 
p{
color: #000;

font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
line-height:0px;
}
`

