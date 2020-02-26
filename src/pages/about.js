import React from "react"
import { graphql } from 'gatsby';
import styled from 'styled-components'
import Img from 'gatsby-image';

export const query = graphql`
query aboutQuery {
  allDatoCmsAbout {
    nodes {
      heading
      description
      paragraph
      id
      backgroundimage {
        fluid{
        src
        ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
}

`


const StyledWrapper = styled.article`
width : 100% ;
min-height : 100%; 


@media(min-width:600px){ 

}


`
const StyledInnerWrapper = styled.div`

width: 100%;
height: 100%; 
justify-content: center;  
align-items : center; ;
display: grid;
padding : 50px 10px 10px 10px;  
justify-items : center;
align-items : center ;
grid-template-rows : .5fr .5fr 400px 1.5fr ;
grid-gap: 5px;

@media(min-width:500px){ 
  grid-template-rows : .5fr .5fr 400px 1.5fr ;
}

@media(min-width:1000px){ 
  grid-template-rows : .5fr .5fr 3fr  ;
  grid-template-columns: 1fr 2fr; 
}



`
const StyledImg = styled(Img)`
width : 100%; 
height :100%;
grid-row: 3/3;
place-self: center; 
border-radius: 20px;
max-width: 400px;

@media(min-width:1000px){ 


}


@media(min-width:1000px){ 
grid-row : 1/5; 
grid-column: 2/2;
max-width: 500px;
}


`

const StyledTitle = styled.h2`
font-size: 30px; 
text-align: center ;
text-transform: capitalize; 
grid-row : 1/1; 
`


const StyledParagraph = styled.p`
font-size: 15px; 
text-align: center ;
text-transform: capitalize; 
grid-row : 2/3; 
@media(min-width:600px){ 
width: 70%;

}

@media(min-width:1000px){ 
grid-row : 3/4;

}
`


const StyledDescription = styled.p`
font-size: 14px; 
text-align: center ;
text-transform: capitalize; 
grid-row : 4/4; 
@media(min-width:600px){ 
width: 70%;

}


@media(min-width:1000px){ 
grid-row : 4/4;

}
`

const AboutPage = ({ data }) => {
  return (
    <>
      {data.allDatoCmsAbout.nodes.map(item =>
        <StyledWrapper key={item.id}>
          <StyledInnerWrapper>
            <StyledTitle>{item.heading}</StyledTitle>
            <StyledParagraph>{item.paragraph}</StyledParagraph>
            <StyledDescription>{item.description}</StyledDescription>
            <StyledImg fluid={item.backgroundimage.fluid} />
          </StyledInnerWrapper>
        </StyledWrapper>
      )}
    </>
  );
}
export default AboutPage
