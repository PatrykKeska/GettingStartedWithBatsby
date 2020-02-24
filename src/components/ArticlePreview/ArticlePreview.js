import styled from 'styled-components';
import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const ArticleWrapper = styled(Link)`
display : flex;
justify-content: center; 
align-items: center;  
position : relative; 
width :100%; 
height : 400px; 
background-image: url(${({ background }) => background}); 
background-size : cover ; 
background-position : center; 
background-repeat: no-repeat; 


`

const ArticleDetails = styled.div`
position : absolute; 
width : 100% ; 
height : 30% ; 
bottom: 5%;
left : 0 ;  
color : white;
background-color: rgba(0,0,0,.6);
display : flex; 
justify-content : center; 
align-items : flex-start;
flex-direction : column;

h2{ 
     margin : 5px; 
     font-size: 1.1em;
}

p{ 
     margin : 5px; 
     font-size: .6em;
}
`

const StyledImg = styled(Image)`
width: 100%; 
height : 100%; 
object-fit : fit; 
`

// const ArticlePreview = ({title, background , author})=> ( 
// <ArticleWrapper background={background}>
// <ArticleDetails>
// <h2>{title}</h2>
// <p>{author}</p>
//      </ArticleDetails>
// </ArticleWrapper>
// )

const ArticlePreview = ({ title, author, slug, background }) => (
     <ArticleWrapper to={`articles/${slug}`}>
          <StyledImg fluid={background} />
          <ArticleDetails>
               <h2>{title}</h2>
               <p>{author}</p>
          </ArticleDetails>
     </ArticleWrapper>
)


export default ArticlePreview