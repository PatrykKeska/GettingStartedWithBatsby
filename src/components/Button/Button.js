import styled from 'styled-components'

const Button = styled.button`
width: 200px; 
height : 50px; 
background-color: black; 
color : white; 
border : none ; 
font-weight: 700;
font-size: 18px; 
grid-row: 4/4; 
grid-column: 1/3;

@media(min-width:639px){ 
    grid-row: 3/3;
  grid-column: 1/1;    
  }
`


export default Button