import React from 'react'
// import Image from 'gatsby-image';
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components';



export const query = graphql`
query querySingleArticle($id: String!) {
  datoCmsArticle(id: {eq: $id}) {
    title
    author
    fimage {
      fluid(maxWidth:300 maxHeight:200){ 
      ...GatsbyDatoCmsFluid_tracedSVG
      }
    }
    articleContent {
      ... on DatoCmsParagraph {
        paragraphContent
      }
    }
  }
}

 `;



const StyledImg = styled(Image)`
width : 50%; 
height : 50% ;
object-fit: fit; 
`

const PostLayout = ({ data }) => {

  return (
    <div>
      <h1>{data.datoCmsArticle.title}</h1>
      <p>{data.datoCmsArticle.author}</p>
      <StyledImg fluid={data.datoCmsArticle.fimage.fluid} />

    </div>
  )

}



export default PostLayout