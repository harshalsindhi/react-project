
import { useState } from 'react';
import styled from 'styled-components';


const Right_nav = ({selectNumber,setSelectNumber}) => {
    const num=[1,2,3,4,5,6];
   // const[selectNumber,setSelectNumber]=useState(2);
    // console.log(selectNumber);
  return (
    <Main>
     <Container>
        {
            num.map((ele,index)=>{
             return(
                <>
                <Box key={index} 
                select={ele===selectNumber}
                onClick={
                     ()=>{
                      setSelectNumber(ele);  
                    }
                     }
                
                >
                    {ele}
                </Box>
               
                </>
             )
            })

        }
        
     </Container>
     <p>select number</p>
    </Main>
  )
}

export default Right_nav;
const Main=styled.main`
display:flex;
flex-direction:column;
p{
   
    position:relative;
    left:450px;
    font-size:20px;
    font-weight:400;
    font-family: 'Poppins',sans-serif;
}
`
const Container=styled.div`
display:flex;
position: relative;
left:100px;
`
const Box=styled.div`
   
    width:60px;
    height:60px;
    border:2px solid black;
    color:black;
    display:flex;
    justify-content: center;
    align-items:center;
    cursor:pointer;
    margin:0 10px;
    background-color:${(props)=>(props.select ? "black":"white")};
    color:${(props)=>((props.select) ? "white":"black")};
`