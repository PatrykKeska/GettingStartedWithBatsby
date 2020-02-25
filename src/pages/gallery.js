import React from "react"
import { graphql } from 'gatsby';
import Image from 'gatsby-image'
import styled from 'styled-components'




export const query = graphql`
query galleryCms {
  allDatoCmsGallery {
    nodes {
      heading
      paragraph
      id
      modular {
      photos{
        fluid{
          src
          ...GatsbyDatoCmsFluid_tracedSVG
        }
        path
      }
      }
    }
  }
}
`
const StyledWrapper = styled.article`
width : 100%; 
height: 100%;

p{ 
  width: 80%;

  @media(min-width:640px){ 
    width : 60%;
  }


  @media(min-width:1001px){ 
    width : 30%;
  }

}
`

const GridWrapper = styled.div`
 width : 100%; 
 height : 100% ; 
 display: grid; 
 grid-template-columns: repeat(1, 1fr); 
 grid-gap: 20px;
 padding: 20px 10px;

 @media(min-width:640px){ 
    grid-template-columns: repeat(2,1fr);
    padding : 10px; 
  }


  @media(min-width:1001px){ 
    grid-template-columns: repeat(3,1fr); 
  }


 `

const StyledImage = styled(Image)`
will-change: transform; 
transition : .2s linear; 
border-radius: 15px;
box-shadow: 0 0 5px 2px black; 
 :hover{ 
   transform : scale(.9); 

 }
 `



const GalleryPage = ({ data }) => {
  const { nodes } = data.allDatoCmsGallery;



  return (
    <>
      {nodes.map(item => {
        return (

          <StyledWrapper key={item.id}>
            <h1>{item.heading}</h1>
            <p>{item.paragraph}</p>
            <GridWrapper className="MyComponent">

              {item.modular.map(item => item.photos.map(({ fluid, path }) => <a href={fluid.src}>
                <StyledImage key={fluid.src} fluid={fluid} />
              </a>))}

            </GridWrapper>
          </StyledWrapper>
        )
      })}
    </>
  )
};

export default GalleryPage
