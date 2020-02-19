import styled from 'styled-components'; 
import React from 'react';
import Image from 'gatsby-image'; 


const ArticleWrapper = styled.div ` 
position : relative; 
width :80%; 
height : 400px; 
background-image: url(${({background})=> background}); 
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
     margin : 10px; 
}

p{ 
     margin : 10px; 
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

const ArticlePreview = ({title, background , author})=> ( 
<ArticleWrapper>
<StyledImg fluid={background}/>
<ArticleDetails>
<h2>{title}</h2>
<p>{author}</p>
     </ArticleDetails>
</ArticleWrapper>
)


export default ArticlePreview