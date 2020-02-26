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
width : 80%; 
height : 80% ;
object-fit: fit;

@media(min-width:1000px){
  width : 50%; 
  height: 50%; 
}
`

const PostLayout = ({ data }) => {
  return (
    <div>
      <h1>{data.datoCmsArticle.title}</h1>
      <p>{data.datoCmsArticle.author}</p>
      <StyledImg fluid={data.datoCmsArticle.fimage.fluid} />
      <p>{data.datoCmsArticle.articleContent.map(({ paragraphContent }) => paragraphContent)}</p>

    </div>
  )

}



export default PostLayout