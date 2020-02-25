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
        fluid(maxWidth:300 maxHeight:400){
          src
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      }
    }
  }
}
`
const StyledWrapper = styled.article`
width : 100%; 
height: 100%;
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

const GalleryPage = ({ data }) => {
  const { nodes } = data.allDatoCmsGallery;



  return (
    <>
      {nodes.map(item => {
        return (
          <StyledWrapper key={item.id}>
            <h1>{item.heading}</h1>
            <p>{item.paragraph}</p>
            <GridWrapper>

              {item.modular.map(item => item.photos.map(({ fluid }) => <Image key={fluid.src} fluid={fluid} />))}
            </GridWrapper>
          </StyledWrapper>
        )
      })}
    </>
  )
};

export default GalleryPage
