import React from 'react'
import styled from "styled-components";
import img from './img/dices.jpg';

const Home = ({reverseState}) => {
  return (
    <Container>
        <div>
        <img src={img} alt="this is dice image" />
       </div>
       <div className='content'>
        <h1>
            Dice Game
        </h1>
       <Button onClick={reverseState}>
        Play Now
       </Button>
       </div>
    </Container>
  )
}

export default Home;
const Container=styled.div`
    max-width: 1180px;;
    display:flex;
    margin:0 auto;
    /* border:2px solid black; */
    height:100vh;
    align-items:center;
    .content{
       h1{
        font-size:86px;
        white-space: nowrap;
       } 
    }
`;
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

    
`
