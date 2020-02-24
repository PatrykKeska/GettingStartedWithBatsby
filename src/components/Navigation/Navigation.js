import React from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby';

const NavigationWrapper = styled.nav`
display: flex ; 
justify-content : flex-start; 
align-items : center ; 
font-family:'Montserrat';
position : absolute ; 
top : 20px; 
left : 30px; 

a{ 
    text-decoration : none; 
    color : inherit; 
}
`
    ;
const Logo = styled.span`
font-size: 20px;
font-weight : 700;  
margin-right : 2px;


`


const NavigaitonList = styled.ul`
list-style : none ; 
display : flex; 

`


const NavigaitonListItem = styled.li`
font-weight : 600; 
font-size : 15px; 
margin-left : 10px; 

`



const Navigation = () => (
    <NavigationWrapper>
        <Logo><Link to='/'>HATTA</Link></Logo>
        <NavigaitonList>
            <NavigaitonListItem><Link to="/articles">articles</Link></NavigaitonListItem>
            <NavigaitonListItem><Link to="/about">about</Link></NavigaitonListItem>
            <NavigaitonListItem><Link to="/gallery">gallery</Link></NavigaitonListItem>
            <NavigaitonListItem><Link to="/contact">contact</Link></NavigaitonListItem>
        </NavigaitonList>
    </NavigationWrapper>
)


export default Navigation