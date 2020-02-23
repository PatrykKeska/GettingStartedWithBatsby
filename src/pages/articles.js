import React from "react"
import { graphql } from 'gatsby';
import ArticlePreview from "../components/ArticlePreview/ArticlePreview";
import styled from 'styled-components'
const slugify = require('slugify')


const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 50px;


  @media(min-width:600px){ 
    grid-template-columns: repeat(2,1fr); 
  }


  @media(min-width:1001px){ 
    grid-template-columns: repeat(3,1fr); 
  }
`;

const AriclesPage = ({ data }) => {

  return (
    <ArticlesWrapper>
      {data.allDatoCmsArticle.nodes.map(item => <ArticlePreview author={item.author} slug={slugify(item.title, { lower: true })} key={item.id} title={item.title} background={item.fimage.fluid}>

      </ArticlePreview>)}

    </ArticlesWrapper>
  )
}



export const query = graphql`
  {
    allDatoCmsArticle{
      nodes {
        id
        title
        author
        fimage {
          fluid(maxWidth: 600) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
       
      }
    }
  }
`;





export default AriclesPage
